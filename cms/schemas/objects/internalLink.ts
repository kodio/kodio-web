import { defineField, defineType } from 'sanity';
import InternalLinkIcon from '../../components/InternalLinkIcon';

export const internalLink = defineType({
  name: 'internalLink',
  title: 'Internal link',
  type: 'object',
  icon: InternalLinkIcon,
  fields: [
    defineField({
      name: 'reference',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The title of the page will be used as label if left blank',
    }),
  ],
});
