import { FiHome } from 'react-icons/fi';
import { defineType } from 'sanity';

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  icon: FiHome,
  fields: [
    {
      name: 'metadata',
      title: 'Page metadata',
      description: 'Will override the default metadata for this page',
      type: 'pageMetadata',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'header',
      title: 'Header',
      type: 'header',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'section' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing page',
      };
    },
  },
});
