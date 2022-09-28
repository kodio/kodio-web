import { defineField, defineType } from 'sanity';
import AccordionIcon from '../../components/AccordionIcon';
import AccordionItemIcon from '../../components/AccordionItemIcon';

export const accordion = defineType({
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  icon: AccordionIcon,
  fields: [
    defineField({
      name: 'accordionItems',
      title: 'Accordion items',
      type: 'array',
      of: [{ type: 'accordionItem' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      items: 'accordionItems',
    },
    prepare({ items }) {
      return {
        title: 'Accordion',
        subtitle: `${items?.length ?? 0} item(s)`,
        media: AccordionIcon,
      };
    },
  },
});

export const accordionItem = defineType({
  name: 'accordionItem',
  title: 'Accordion item',
  type: 'object',
  icon: AccordionItemIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
        media: AccordionItemIcon,
      };
    },
  },
});
