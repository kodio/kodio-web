import imageUrlBuilder from '@sanity/image-url';
import PicoSanity from 'picosanity';
import type { Image } from './types';

const sanityConfig = {
  projectId: 'bmm7n0e3',
  dataset: import.meta.env.SANITY_DATASET || 'prod',
  useCdn: false,
  apiVersion: '2022-09-06',
};

export const client = new PicoSanity(sanityConfig);

const imageBuilder = imageUrlBuilder(sanityConfig);

export function urlFor<T extends Image>(image: T) {
  return imageBuilder.image(image);
}
