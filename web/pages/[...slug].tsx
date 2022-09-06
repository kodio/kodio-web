import { GetServerSideProps } from 'next';
import { getPageData } from 'lib/sanityServer';

const SanityPage = ({ page }: { page: { title: string } }) => {
  return <div>{page.title}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const contextSlug = context.params?.slug;
  const slug = Array.isArray(contextSlug) ? contextSlug.join('/') : contextSlug;

  const pageData = await getPageData(context.locale, slug);

  if (!pageData) {
    return { notFound: true };
  }

  return {
    props: { page: pageData },
  };
};

export default SanityPage
