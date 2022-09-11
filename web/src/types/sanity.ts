import type { ArbitraryTypedObject } from '@portabletext/types';

interface Slug {
  _type: 'slug';
  current: string;
}

export interface Page {
  title: string;
  slug: Slug;
  content?: ArbitraryTypedObject[];
}
