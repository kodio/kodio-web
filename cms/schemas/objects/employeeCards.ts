import { defineType } from 'sanity';

export const employeeCards = defineType({
  name: 'employeeCards',
  title: 'Employee cards',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'employeeCard' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      cards: 'cards',
    },
    prepare({ cards }) {
      return {
        title: 'Employee cards',
        subtitle: `${cards?.length ?? 0} card(s)`,
      };
    },
  },
});

export const employeeCard = defineType({
  name: 'employeeCard',
  title: 'Employee card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Background color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fullName',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'tel',
      title: 'Phone number',
      type: 'externalLink',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'externalLink',
    },
  ],
});
