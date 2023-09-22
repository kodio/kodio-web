import { client, previewClient } from './client';
import {
  defaultMetadataQuery,
  footerConfigQuery,
  landingPageQuery,
  menuConfigQuery,
  pagesQuery,
  previewPageQuery,
} from './groq';
import type { DefaultMetadata, FooterConfig, LandingPage, MenuConfig, Page } from './types';

export function fetchPreviewPage(id: string) {
  return previewClient.fetch<LandingPage | Page | null>(previewPageQuery, { id });
}

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
