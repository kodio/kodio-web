import { FiCompass, FiHome, FiShare2, FiTool } from 'react-icons/fi';
import type { ConfigContext } from 'sanity';
import type { StructureBuilder } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

export const structure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .icon(FiTool)
        .child(
          S.list()
            .title('Config')
            .items([
              S.listItem()
                .title('Menu config')
                .icon(FiCompass)
                .child(S.document().schemaType('menuConfig').documentId('menuConfig')),
              S.listItem()
                .title('Footer config')
                .icon(FiCompass)
                .child(S.document().schemaType('footerConfig').documentId('footerConfig')),
              S.listItem()
                .title('Metadata')
                .icon(FiShare2)
                .child(S.document().schemaType('defaultMetadata').documentId('defaultMetadata')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Landing page')
        .icon(FiHome)
        .child(
          S.document()
            .title('Landing page')
            .schemaType('landingPage')
            .documentId('landingPage')
            .views(pageViews(S))
        ),
      S.documentTypeListItem('page').title('Pages'),
    ]);

const pageViews = (S: StructureBuilder) => [
  S.view.form(),
  S.view
    .component(Iframe)
    .options({
      url: (doc: { _id: string }) => `https://kodio.netlify.app/preview?id=${doc._id}`,
      defaultSize: 'mobile',
      reload: {
        button: true,
        revision: 300,
      },
    })
    .title('Preview'),
];

export const defaultDocumentNode = (
  S: StructureBuilder,
  { schemaType }: { schemaType: string }
) => {
  if (['page'].includes(schemaType)) {
    return S.document().views(pageViews(S));
  }
  return null;
};
