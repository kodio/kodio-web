import { defineField, defineType } from 'sanity';

export const handbook = defineType({
  name: 'handbook',
  title: 'Handbook',
  type: 'object',
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'handbookSection' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      sections: 'sections',
    },
    prepare({ sections }) {
      return {
        title: 'Handbook',
        subtitle: `${sections?.length ?? 0} section(s)`,
      };
    },
  },
});

export const handbookSection = defineType({
  name: 'handbookSection',
  title: 'Handbook section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
