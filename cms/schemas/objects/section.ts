import { RxSection } from 'react-icons/rx';
import { defineType } from 'sanity';

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  icon: RxSection,
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
      options: {
        // white, green-800, orange-200, yellow-100, yellow-50
        list: [
          { title: 'White', value: 'white' },
          { title: 'Green 900', value: 'green-900' },
          { title: 'Green 800', value: 'green-800' },
          { title: 'Green 700', value: 'green-700' },
          { title: 'Orange 500', value: 'orange-500' },
          { title: 'Orange 400', value: 'orange-400' },
          { title: 'Orange 300', value: 'orange-300' },
          { title: 'Orange 200', value: 'orange-200' },
          { title: 'Purple 400', value: 'purple-400' },
          { title: 'Purple 300', value: 'purple-300' },
          { title: 'Purple 200', value: 'purple-200' },
          { title: 'Purple 100', value: 'purple-100' },
          { title: 'Yellow 200', value: 'yellow-200' },
          { title: 'Yellow 100', value: 'yellow-100' },
          { title: 'Yellow 50', value: 'yellow-50' },
        ],
      },
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
        { type: 'imageBlock' },
        { type: 'reference', to: [{ type: 'commonBlock' }] },
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
        media: RxSection,
      };
    },
  },
});
