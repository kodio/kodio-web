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
      validation: (Rule) => Rule.required(),
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
