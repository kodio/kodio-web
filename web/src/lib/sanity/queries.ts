import { client, previewClient } from './client';
import {
  calendarPageQuery,
  customerLogosQuery,
  defaultMetadataQuery,
  eventsQuery,
  footerConfigQuery,
  landingPageQuery,
  menuConfigQuery,
  pagesQuery,
  previewPageQuery,
} from './groq';
import type {
  CalendarPage,
  DefaultMetadata,
  Event,
  FooterConfig,
  ImageBlock,
  LandingPage,
  MenuConfig,
  Page,
} from './types';

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

export function fetchCalendarPage() {
  return client.fetch<CalendarPage | null>(calendarPageQuery);
}

export function fetchEvents() {
  return client.fetch<Event[]>(eventsQuery);
}

/**
 * Kundelogoene som ligger i `customers`-blokken på landingssiden.
 * Brukes av forsiden slik at logoveggen kan gjenbruke logoene som allerede
 * er lastet opp i Sanity, uten at innholdet må dupliseres.
 */
export async function fetchCustomerLogos() {
  const imageBlocks = await client.fetch<(ImageBlock | null)[] | null>(customerLogosQuery);

  return (imageBlocks ?? []).flatMap((block) => (block?.image?.asset?._ref ? [block.image] : []));
}
