import { client } from './client';
import {
  defaultMetadataQuery,
  footerConfigQuery,
  landingPageQuery,
  menuConfigQuery,
  pagesQuery,
} from './groq';
import type { DefaultMetadata, FooterConfig, LandingPage, MenuConfig, Page } from './types';

export function fetchLandingPage() {
  return client.fetch<LandingPage>(landingPageQuery);
}

export function fetchPages() {
  return client.fetch<Page[]>(pagesQuery);
}

export function fetchMenuConfig() {
  return client.fetch<MenuConfig>(menuConfigQuery);
}

export function fetchFooterConfig() {
  return client.fetch<FooterConfig>(footerConfigQuery);
}

export function fetchDefaultMetadata() {
  return client.fetch<DefaultMetadata>(defaultMetadataQuery);
}
