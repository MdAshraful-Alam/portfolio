import { useEffect } from "react";
import type { PortfolioData } from "../types/portfolio";

interface MetaProps {
  data: PortfolioData;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function Meta({ data }: MetaProps) {
  useEffect(() => {
    document.title = data.seo.title;

    upsertMeta("name", "description", data.seo.description);
    upsertMeta("property", "og:title", data.seo.title);
    upsertMeta("property", "og:description", data.seo.description);
    upsertMeta("name", "twitter:title", data.seo.title);
    upsertMeta("name", "twitter:description", data.seo.description);

    const socialImageUrl = new URL(data.seo.socialImage, document.baseURI).href;

    upsertMeta("property", "og:image", socialImageUrl);
    upsertMeta("name", "twitter:image", socialImageUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: data.name,
      jobTitle: data.headline,
      email: "mailto:MdAshraful.Alam@Colostate.edu",
      telephone: "+1-970-632-8249",
      url: window.location.href,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Collins",
        addressRegion: "CO",
        addressCountry: "US",
      },
      alumniOf: data.education.map((item) => item.institution),
      knowsAbout: data.skills.flatMap((group) => group.items),
    };

    let script = document.getElementById("structured-data");

    if (!(script instanceof HTMLScriptElement)) {
      script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [data]);

  return null;
}
