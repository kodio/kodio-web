import { FiCompass } from 'react-icons/fi';
import { defineField, defineType } from 'sanity';

export const footerConfig = defineType({
  name: 'footerConfig',
  title: 'Footer config',
  type: 'document',
  icon: FiCompass,
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'footerConfigSection' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer config',
      };
    },
  },
});

export const footerConfigSection = defineType({
  name: 'footerConfigSection',
  title: 'Footer config section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      links: 'links',
    },
    prepare({ heading, links }) {
      return {
        title: heading,
        subtitle: `${links?.length ?? 0} link(s)`,
      };
    },
  },
});
