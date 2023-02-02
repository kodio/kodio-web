import { defineType } from 'sanity';

export const banner = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageObj',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'textPosition',
      title: 'Text position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
      validation: (Rule) => Rule.max(1),
    },
    {
      name: 'linkColor',
      title: 'Link color',
      type: 'color',
      initialValue: 'yellow-50',
      options: {
        // orange-300, yellow-50
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
  ],
  preview: {
    select: {
      heading: 'heading',
      image: 'image',
      textPosition: 'textPosition',
    },
    prepare({ heading, image, textPosition }) {
      return {
        title: heading,
        subtitle: `Banner - text position: ${textPosition ?? 'left'}`,
        media: image,
      };
    },
  },
});
