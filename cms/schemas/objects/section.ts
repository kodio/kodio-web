import { defineField, defineType } from 'sanity';

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Only used in sanity studio',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Yellow', value: 'kodio-yellow' },
          { title: 'Purple', value: 'kodio-purple' },
          { title: 'Dark', value: 'kodio-dark' },
          { title: 'Orange', value: 'kodio-orange' },
        ],
        layout: 'radio',
      },
      initialValue: 'white',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'accordion' }, { type: 'article' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      color: 'color',
    },
    prepare({ label, color }) {
      return {
        title: label,
        subtitle: color,
      };
    },
  },
});
