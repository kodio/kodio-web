import { createClient, groq } from 'next-sanity';
import { sanityConfig } from './sanityConfig';

const sanityClient = createClient(sanityConfig);

type Page = {
  title: string;
};

export const getPageData = (
  locale?: string,
  slug?: string
): Promise<Page | null> =>
  sanityClient.fetch(
    groq`
*[_type == "page" && slug.current == $slug][0]{
  title
}`,
    { slug }
  );
