# Kodio web

[![Netlify Status](https://api.netlify.com/api/v1/badges/7308bfd7-c83b-4d0a-bf41-42b8de13ac48/deploy-status)](https://app.netlify.com/sites/kodio/deploys)

## Getting started

- Install [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.io/installation)

- Install dependencies

```bash
pnpm install
```

- Run locally

```bash
pnpm dev
```

## Web

The code for the website is in the `web` folder. The website is made using [Astro](https://astro.build/).

[Sass](https://sass-lang.com/) is used for styling.

### Install new dependencies

Install new dependencies by doing it in the `web` folder.

```bash
cd web
pnpm add package-to-install
```

or

```bash
pnpm add package-to-install -F ./web
```

### Images

Uses [https://github.com/ausi/respimagelint](https://github.com/ausi/respimagelint) to calculate `sizes` for images.

## CMS

The code for the CMS is in the `cms` folder. The CMS is made using [Sanity](https://www.sanity.io/).

The CMS is hosted at [https://kodio.sanity.studio/](https://kodio.sanity.studio/)

### Running the CMS locally

The CMS can be run locally to see changes in the schema without deploying.

Note that the changes done in data locally will be save to the save database as for the deployed studio.

```bash
pnpm cms
```

### Deploy

If there are changes in the schema that should be deployed run:

```bash
pnpm cms:deploy
```

This only applies to changes in the schema, changes in data does not require deployment to reach the database.

## Code standard

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [TypeScript](https://www.typescriptlang.org/) is used to verify the code and to format. These will be run on pull-request to the repository.

This can be run locally with

```bash
pnpm check
```

## Environment variables

Environment variables kan be specified by creating a `.env` file in the root folder.

See the example file `.env.example` for available environment variables.
