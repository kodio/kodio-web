# Kodio web

[![Netlify Status](https://api.netlify.com/api/v1/badges/7308bfd7-c83b-4d0a-bf41-42b8de13ac48/deploy-status)](https://app.netlify.com/sites/kodio/deploys)

## Komme i gang

- Installer [Node.js](https://nodejs.org/en/download/) og [pnpm](https://pnpm.io/installation)

- Installer pakker

```bash
pnpm install
```

- Kjør lokalt

```bash
pnpm dev
```

## Web

Koden for nettsiden ligger i `web`. Nettsiden er laget med [Astro](https://astro.build/).

For styling brukes stort sett [Sass](https://sass-lang.com/).

### Installere pakker

For å legge til nye npm-pakker må man gjøre det i `web`-mappen.

```bash
cd web
pnpm add package-to-install
```

eller

```bash
pnpm add package-to-install -F ./web
```

### Bilder

Bruker [https://github.com/ausi/respimagelint](https://github.com/ausi/respimagelint) for å regne ut `sizes`.

## CMS

Koden for CMS-et ligger i `cms`. CMS-et er laget med [Sanity](https://www.sanity.io/).

CMS-et er hostet på [https://kodio.sanity.studio/](https://kodio.sanity.studio/)

### Kjør CMS lokalt

CMS-et kan kjøres lokalt for å se endringer i schema uten å deploye.

Merk at endringer gjort i data lokalt blir lagret i samme database som for deployet studio.

```bash
pnpm cms
```

### Deploy

Dersom det er endringer i schemaet som skal deployes kjør:

```bash
pnpm cms:deploy
```

Dette gjelder altså kun endringer i schema (oppsettet), data legges inn i studio enten lokalt eller på deployet side.

## CI/CD

Det brukes [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) og [TypeScript](https://www.typescriptlang.org/) for å verifisere kodestandarden. Ved pull-request til repo vil disse bli kjørt.

Dette kan kjøres lokalt med

```bash
pnpm check
```

## Miljøvariabler

Miljøvariabler (environment variables) kan endres ved å lage en `.env` fil i topp-mappen.

Se filen `.env.example` for miljøvariabler som er i bruk og kan endres.
