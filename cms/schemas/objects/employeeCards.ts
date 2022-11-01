import { defineField, defineType } from 'sanity';

export const employeeCards = defineType({
  name: 'employeeCards',
  title: 'Employee cards',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'employeeCard' }],
      validation: (Rule) => Rule.required(),
    }),
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
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Background color',
      type: 'color',
    }),
    defineField({
      name: 'fullName',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'tel',
      title: 'Phone number',
      type: 'externalLink',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'externalLink',
    }),
  ],
});
