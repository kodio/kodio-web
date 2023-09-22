import { FiUsers } from 'react-icons/fi';
import { defineType } from 'sanity';

export const employeeCards = defineType({
  name: 'employeeCards',
  title: 'Employee cards',
  type: 'object',
  icon: FiUsers,
  fields: [
    {
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'employee' }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      employees: 'employees',
    },
    prepare({ employees }) {
      return {
        title: 'Employees',
        subtitle: `${employees?.length ?? 0} employee(s)`,
        media: FiUsers,
      };
    },
  },
});
