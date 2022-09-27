import { defineField, defineType } from 'sanity';
import ExternalLinkIcon from '../../components/ExternalLinkIcon';

export const externalLink = defineType({
  name: 'externalLink',
  title: 'External link',
  type: 'object',
  icon: ExternalLinkIcon,
  fields: [
    defineField({
      name: 'href',
      type: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The URL will be used as label if left blank',
    }),
    defineField({
      name: 'blank',
      type: 'boolean',
      title: 'Open in new tab',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      href: 'href',
      label: 'label',
      blank: 'blank',
    },
    prepare({ href, label, blank }) {
      return {
        title: label || href,
        subtitle: `External link${blank ? ' - new tab' : ''}`,
        media: ExternalLinkIcon,
      };
    },
  },
});
