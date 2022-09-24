import { defineType } from 'sanity';
import ExternalLinkIcon from '../../components/ExternalLinkIcon';
import InternalLinkIcon from '../../components/InternalLinkIcon';

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'blockContentInternalLink',
            title: 'Internal link',
            type: 'object',
            icon: InternalLinkIcon,
            fields: [
              {
                name: 'reference',
                title: 'Page',
                type: 'reference',
                to: [{ type: 'page' }],
                validation: (Rule) => Rule.required(),
              },
            ],
          },
          {
            name: 'blockContentExternalLink',
            title: 'External link',
            type: 'object',
            icon: ExternalLinkIcon,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.required().uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
  ],
});
