import type { ArbitraryTypedObject } from '@portabletext/types';

export interface ExternalLink {
  _type: 'externalLink';
  blank?: boolean;
  href: string;
  label?: string;
}

export interface FooterConfig {
  links: (InternalLink | ExternalLink)[];
}

export interface InternalLink {
  _type: 'internalLink';
  slug: Slug;
  label?: string;
}

export interface MenuConfig {
  links: (InternalLink | ExternalLink)[];
}

export interface Page {
  title: string;
  slug: Slug;
  content?: ArbitraryTypedObject[];
}

export interface Slug {
  _type: 'slug';
  current: string;
}
