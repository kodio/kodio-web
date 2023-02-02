import { defineType } from 'sanity';

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      initialValue: 'yellow-50',
      validation: (Rule) => Rule.required(),
      options: {
        // white, green-800
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preHeading',
      title: 'Pre-heading',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
      validation: (Rule) => Rule.max(1),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageObj',
    },
    {
      name: 'preamble',
      title: 'Preamble',
      type: 'string',
      validation: (Rule) =>
        Rule.custom<string>((preamble, context) => {
          if (preamble && (context.parent as any)?.image) {
            return 'Cannot have both preamble and image';
          }

          return true;
        }),
    },
  ],
});
