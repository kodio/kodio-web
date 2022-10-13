import { defineField, defineType } from 'sanity';

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'accordion' },
        { type: 'article' },
        { type: 'banner' },
        { type: 'bannerLinkGroup' },
      ],
      validation: (Rule) => Rule.required(),
    }),
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
