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
  linkColor?: Color;
}

export interface BannerLink {
  title?: string;
  preHeading1?: string;
  preHeading2?: string;
  image?: Image;
  links?: Link[];
}

export interface BannerLinkGroup extends ArbitraryTypedObject {
  bannerLinks?: BannerLink[];
}

export interface BlockContentExternalLink {
  href: string;
  blank: boolean;
}

export interface BlockContentInternalLink {
  slug: Slug;
}

export type Color =
  | 'white'
  | 'green-900'
  | 'green-800'
  | 'green-700'
  | 'orange-500'
  | 'orange-400'
  | 'orange-300'
  | 'orange-200'
  | 'purple-400'
  | 'purple-300'
  | 'purple-200'
  | 'purple-100'
  | 'yellow-200'
  | 'yellow-100'
  | 'yellow-50'
  | 'transparent';

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
  color: Color;
  heading: string;
  links?: Link[];
  image?: ImageObj;
}

export interface Image {
  asset?: {
    _ref?: string;
  };
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
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
  heading?: string;
  color: Color;
  content?: SectionContent[];
}

type SectionContent = Accordion | Article | Banner | BannerLinkGroup;

export interface Slug {
  _type: 'slug';
  current: string;
}
