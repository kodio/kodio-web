import { defineField, defineType } from 'sanity';

export const bannerLinkGroup = defineType({
  name: 'bannerLinkGroup',
  title: 'Banner link group',
  type: 'object',
  fields: [
    defineField({
      name: 'bannerLinks',
      title: 'Banner links',
      type: 'array',
      of: [{ type: 'bannerLink' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      bannerLinks: 'bannerLinks',
    },
    prepare({ bannerLinks }) {
      return {
        title: 'Banner link group',
        subtitle: `${bannerLinks?.length ?? 0} link(s)`,
      };
    },
  },
});

export const bannerLink = defineType({
  name: 'bannerLink',
  title: 'Banner link',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preHeading1',
      title: 'Pre-heading 1',
      type: 'string',
    }),
    defineField({
      name: 'preHeading2',
      title: 'Pre-heading 2',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Link',
      description: 'Label is only for screen readers, if none are provided Title is used.',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title,
        subtitle: `Banner link`,
        media: image,
      };
    },
  },
});
