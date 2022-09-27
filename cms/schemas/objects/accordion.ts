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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'accordionItem' }],
    }),
  ],
  preview: {
    select: {
      items: 'items',
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
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      header: 'header',
    },
    prepare({ header }) {
      return {
        title: header,
        media: AccordionItemIcon,
      };
    },
  },
});
