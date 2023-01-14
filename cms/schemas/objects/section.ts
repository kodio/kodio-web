import { defineType } from 'sanity';

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      initialValue: 'yellow-50',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'accordion' },
        { type: 'article' },
        { type: 'banner' },
        { type: 'bannerLinkGroup' },
        { type: 'employeeCards' },
        { type: 'handbook' },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      color: 'color',
      content: 'content',
    },
    prepare({ heading, color, content }) {
      return {
        title: heading,
        subtitle: `Section -  color: ${color}, ${content?.length ?? 0} content block(s)`,
      };
    },
  },
});
