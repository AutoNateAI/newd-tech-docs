# New Deliverance Tech Docs

Internal staff training docs for the New Deliverance technology stack.

## Stack

- Docusaurus 3
- TypeScript
- GitHub Actions
- GitHub Pages publishing to `gh-pages`
- Custom domain: `newd-tech-docs.autonateai.com`

## Local Development

```bash
npm install
npm run start
```

## Checks

```bash
npm run typecheck
npm run build
```

## Content Structure

- `docs/marketing-site/`: maintaining the public New Deliverance Astro site.
- `docs/ai-native/`: using Codex to build and review AI-native software.
- `docs/internal-tools/`: staff modules for internal tools as they are created.

Keep private network details, credentials, donor data, member data, and staff personal data out of the docs.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, builds the Docusaurus site, and publishes `build/` to the `gh-pages` branch. GitHub Pages serves the custom domain from that branch.
