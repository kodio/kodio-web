# Kodio web

[![Build and deploy](https://github.com/Glitner/kodio-web/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Glitner/kodio-web/actions/workflows/deploy.yml)

## Komme i gang

- Installer [Node.js](https://nodejs.org/en/download/)

- Installer pakker

```bash
npm install
```

- Kjør lokalt

```bash
npm run dev
```

## Web

Koden for nettsiden ligger i `web`. Nettsiden er laget med [Astro](https://astro.build/).

For styling brukes stort sett [Sass](https://sass-lang.com/).

### Installere pakker

For å legge til nye npm-pakker må man gjøre det i `web`-mappen.

```bash
cd web
npm install ...
```

### Bygg og preview

Astro har funksjonalitet for å bygge og vise siden lokalt som om det skulle vært deployet.

Dette kan gjøres ved å kjøre:

```bash
npm run build
npm run preview
```

Ved utvikling vil det være lurt å kjøre

```bash
npm run dev
```

for å få hot-reloading.

Ved bruk av `build` og `preview` må disse kommandoene kjøres igjen for hver kodeendring for å se resultatet.

## CMS

Koden for CMS-et ligger i `cms`. CMS-et er laget med [Sanity](https://www.sanity.io/). Merk det brukes v3 av Sanity som foreløpig er i alpha.

CMS-et er hostet på [https://kodio.sanity.studio/](https://kodio.sanity.studio/)

### Kjør CMS lokalt

CMS-et kan kjøres lokalt for å se endringer i schema uten å deploye.

Merk at endringer gjort i data lokalt blir lagret i samme database som for deployet studio.

```bash
npm run cms
```

### Deploy

Dersom det er endringer i schemaet som skal deployes kjør:

```bash
npm run cms:deploy
```

Dette gjelder altså kun endringer i schema (oppsettet), data legges inn i studio enten lokalt eller på deployet side.

## CI/CD

Det brukes [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) og [TypeScript](https://www.typescriptlang.org/) for å verifisere kodestandarden. Ved pull-request til repo vil disse bli kjørt.

Dette kan kjøres lokalt med

```bash
npm run verify
```

## Miljøvariabler

Miljøvariabler (environment variables) kan endres ved å lage en `.env` fil i topp-mappen.

Se filen `.env.example` for miljøvariabler som er i bruk og kan endres.
