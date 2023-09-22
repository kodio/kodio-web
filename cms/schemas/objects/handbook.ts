import { FiBookOpen } from 'react-icons/fi';
import { RxSection } from 'react-icons/rx';
import { defineType } from 'sanity';

export const handbook = defineType({
  name: 'handbook',
  title: 'Handbook',
  type: 'object',
  icon: FiBookOpen,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'handbookSection' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      sections: 'sections',
    },
    prepare({ sections }) {
      return {
        title: 'Handbook',
        subtitle: `${sections?.length ?? 0} section(s)`,
        media: FiBookOpen,
      };
    },
  },
});

export const handbookSection = defineType({
  name: 'handbookSection',
  title: 'Handbook section',
  type: 'object',
  icon: RxSection,
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
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading,
        media: RxSection,
      };
    },
  },
});
