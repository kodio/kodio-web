import { FiCompass, FiTool } from 'react-icons/fi';
import type { ConfigContext, StructureBuilder } from 'sanity/desk';

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
            ])
        ),
      S.divider(),
      //   S.listItem()
      //     .title('Landing page')
      //     .icon(FiHome)
      //     .child(
      //       S.document().title('Landing page').schemaType('landingPage').documentId('landingPage')
      //     ),
      S.documentTypeListItem('page').title('Pages'),
    ]);
