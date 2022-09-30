import type { ArbitraryTypedObject } from '@portabletext/types';

export interface Accordion extends ArbitraryTypedObject {
  accordionItems?: AccordionItem[];
}

export interface AccordionItem {
  title?: string;
  body?: ArbitraryTypedObject[];
}

export interface Article extends ArbitraryTypedObject {
  body?: ArbitraryTypedObject[];
}

export interface Banner extends ArbitraryTypedObject {
  heading?: string;
  body?: ArbitraryTypedObject[];
  image?: ImageObj;
  textPosition?: 'left' | 'right';
  links?: Link[];
  linkColor?: string;
}

export interface BlockContentExternalLink {
  href: string;
  blank: boolean;
}

export interface BlockContentInternalLink {
  slug: Slug;
}

export interface DefaultMetadata {
  description: string;
  image: Image;
}

export interface ExternalLink {
  _type: 'externalLink';
  blank?: boolean;
  href: string;
  label?: string;
}

export interface FooterConfig {
  sections: FooterConfigSection[];
}

export interface FooterConfigSection {
  heading?: string;
  links: Link[];
}

export interface Header {
  color: string;
  heading: string;
  links?: Link[];
  image?: ImageObj;
}

export interface Image {
  asset?: {
    _ref?: string;
  };
}

export interface ImageObj extends Image {
  _type: 'imageObj';
  alt?: string;
}

export interface InternalLink {
  _type: 'internalLink';
  slug?: Slug;
  label?: string;
}

export type Link = InternalLink | ExternalLink;

export interface LandingPage {
  metadata?: PageMetadata;
  header: Header;
  sections?: Section[];
}

export interface MenuConfig {
  links: Link[];
}

export interface Page {
  title: string;
  slug: Slug;
  metadata?: PageMetadata;
  header: Header;
  sections?: Section[];
}

export interface PageMetadata {
  description?: string;
  image?: Image;
}

export interface Section {
  _type: 'section';
  color: string;
  content?: SectionContent[];
}

type SectionContent = Accordion | Article | Banner;

export interface Slug {
  _type: 'slug';
  current: string;
}
