import { FiBox } from 'react-icons/fi';
import { defineType } from 'sanity';

export const commonBlock = defineType({
  name: 'commonBlock',
  title: 'Common Block',
  type: 'document',
  icon: FiBox,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'block',
      title: 'Block',
      type: 'array',
      of: [
        { type: 'accordion' },
        { type: 'article' },
        { type: 'banner' },
        { type: 'bannerLinkGroup' },
        { type: 'employeeCards' },
      ],
      validation: (Rule) => Rule.required().max(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      block: 'block',
    },
    prepare({ title, block }) {
      return {
        title,
        subtitle: `Common Block - ${block?.[0]?._type}`,
        media: FiBox,
      };
    },
  },
});
