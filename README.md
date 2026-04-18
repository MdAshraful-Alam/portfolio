# Md Ashraful Alam Portfolio

Formal, black-and-white personal portfolio built with React, TypeScript, and Vite. The project is structured for GitHub Pages deployment through GitHub Actions and is ready to connect to a Namecheap-managed custom domain later.

## Stack

- React
- TypeScript
- Vite
- CSS Modules
- GitHub Actions
- GitHub Pages

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- public/
|   |-- CNAME.example
|   |-- favicon.svg
|   |-- og-image.svg
|   `-- resume-placeholder.html
|-- src/
|   |-- assets/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- sections/
|   |-- styles/
|   `-- types/
|-- index.html
|-- package.json
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
`-- vite.config.ts
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the local dev server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## How Content Is Organized

All editable portfolio content lives in [`src/data/portfolio.ts`](./src/data/portfolio.ts).

Update this file when you want to change:

- name, headline, and hero text
- work experience
- project descriptions and tech tags
- publications and links
- patent entries
- skills
- education
- contact information

The type definitions that shape this content live in [`src/types/portfolio.ts`](./src/types/portfolio.ts).

## Customizing Before You Publish

### Resume link

The Resume button currently points to `public/resume-placeholder.html` so the site never ships with a broken button.

To replace it:

1. Put your PDF in `public/`, for example `public/Md-Ashraful-Alam-Resume.pdf`
2. Open [`src/data/portfolio.ts`](./src/data/portfolio.ts)
3. Change the hero action `href` from `resume-placeholder.html` to `Md-Ashraful-Alam-Resume.pdf`
4. Remove `placeholder: true` from that action if you want to hide the placeholder badge

### LinkedIn URL

Open [`src/data/portfolio.ts`](./src/data/portfolio.ts) and replace the placeholder LinkedIn URL and text in the `contact.items` array.

### Publication links

Each publication already supports a link. Replace the example URLs in [`src/data/portfolio.ts`](./src/data/portfolio.ts) with the real paper links and remove the placeholder flags if you want.

### Images or graphics

The hero accent graphic lives in [`src/assets/hero-grid.svg`](./src/assets/hero-grid.svg). You can replace or expand the visuals from the `src/assets/` folder later.

## GitHub Pages Deployment

This project uses the official GitHub Pages workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

### First-time setup

1. Create a GitHub repository and push this project to the `main` branch.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main`. The workflow will install dependencies, build the site, and deploy it automatically.

### Why the Vite base is set this way

[`vite.config.ts`](./vite.config.ts) uses:

```ts
base: "./"
```

That keeps asset URLs relative, which is the simplest option for a single-page portfolio that should work both on:

- a standard GitHub Pages project URL like `https://username.github.io/repository-name/`
- a custom domain later, such as `https://yourdomain.com/`

Because this is a single-page site without client-side route paths, relative assets are a stable and low-maintenance choice for GitHub Pages.

## Exact GitHub Pages Steps

1. Create a new GitHub repository.
2. Add this local project as the repo contents.
3. Push to `main`.
4. In GitHub, go to `Settings -> Pages`.
5. Choose `GitHub Actions` as the source.
6. Wait for the `Deploy Portfolio` workflow to finish in the `Actions` tab.
7. Open the generated Pages URL from the deployment environment or Pages settings.

## Exact Namecheap Custom Domain Steps

Only do this after the GitHub Pages deployment is already working.

### 1. Add the custom domain in GitHub

1. In GitHub, open `Settings -> Pages`.
2. Enter your custom domain, for example `portfolio.yourdomain.com`.
3. Save it.

### 2. Add the real CNAME file to this project

1. Copy `public/CNAME.example` to `public/CNAME`
2. Replace `your-custom-domain.com` with your real domain, for example `portfolio.yourdomain.com`
3. Commit and push the change to `main`

GitHub Pages will publish the `CNAME` file during deployment.

### 3. Configure DNS in Namecheap

For a subdomain such as `portfolio.yourdomain.com`:

1. Open your Namecheap domain dashboard
2. Go to `Domain List -> Manage -> Advanced DNS`
3. Add a `CNAME Record`
4. Set `Host` to the subdomain part only, for example `portfolio`
5. Set `Value` to `username.github.io`
6. Save changes

For an apex domain such as `yourdomain.com`, GitHub Pages usually requires A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

If you want `www.yourdomain.com` as well, add:

- a `CNAME` record with `Host` = `www`
- `Value` = `username.github.io`

### 4. Wait for DNS propagation

Propagation can take from a few minutes to up to 24 hours, though it is often quicker.

### 5. Enable HTTPS

After GitHub detects the domain correctly:

1. Return to `Settings -> Pages`
2. Confirm `Enforce HTTPS` is enabled

## Exact GitHub Actions Workflow

```yaml
name: Deploy Portfolio

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Install dependencies
        run: npm install

      - name: Build site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Checklist Before Going Public

- Replace the resume placeholder with your real PDF or hosted resume URL
- Replace the LinkedIn placeholder with your public profile
- Replace publication placeholder links with real paper URLs
- Add `public/CNAME` only when your real domain is ready
- Confirm the final GitHub Pages URL works before connecting Namecheap
- Review text one more time for any wording you want to personalize
