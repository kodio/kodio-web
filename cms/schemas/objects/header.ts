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
