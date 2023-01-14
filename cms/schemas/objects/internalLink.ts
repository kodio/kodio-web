import { defineType } from 'sanity';
import InternalLinkIcon from '../../components/InternalLinkIcon';

export const internalLink = defineType({
  name: 'internalLink',
  title: 'Internal link',
  type: 'object',
  icon: InternalLinkIcon,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required().warning(),
    },
    {
      name: 'reference',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
  preview: {
    select: {
      label: 'label',
      to: 'reference.title',
    },
    prepare({ label, to }) {
      return {
        title: label,
        subtitle: `Internal link - ${to}`,
        media: InternalLinkIcon,
      };
    },
  },
});
