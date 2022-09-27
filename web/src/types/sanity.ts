import type { ArbitraryTypedObject } from '@portabletext/types';

export interface Accordion {
  items?: AccordionItem[];
}

export interface AccordionItem {
  header?: string;
  body?: ArbitraryTypedObject[];
}

export interface Article {
  header?: string;
  body?: ArbitraryTypedObject[];
}

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

export interface LandingPage {
  sections?: Section[];
}

export interface MenuConfig {
  links: (InternalLink | ExternalLink)[];
}

export interface Page {
  title: string;
  slug: Slug;
  sections?: Section[];
}

export interface Section {
  _type: 'section';
  color: string;
  content?: SectionContent[];
}

type SectionContent = Accordion | Article;

export interface Slug {
  _type: 'slug';
  current: string;
}
