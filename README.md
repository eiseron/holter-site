# holter-site

Institutional Holter Landing Page.

Static marketing site for [holter.dev](https://holter.dev), built with Astro and deployed to Cloudflare Pages.

## Quick Start

### Prerequisites

- Docker and Docker Compose

### Development

```bash
docker compose up
```

Visit [localhost:4321](http://localhost:4321).

The first run installs dependencies (`yarn install`) inside the container and writes `yarn.lock` to the repo root — commit it.

### Build for production

```bash
docker compose run --rm site yarn build
```

Output is written to `dist/`.

### Preview the production build

```bash
docker compose run --rm site yarn preview
```

### Lint

```bash
docker compose run --rm site yarn lint        # check
docker compose run --rm site yarn lint:fix    # write
```

## Stack

- [Astro](https://astro.build/) (static + Islands)
- SCSS via `sass`
- Yarn 4 via Corepack
- Node 22 (Alpine)

## Deployment

Pushes to `main` are mirrored to GitHub via `.gitlab-ci.yml`. Cloudflare Pages deploys the GitHub `main` branch automatically.
