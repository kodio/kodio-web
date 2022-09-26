import { GrConfigure, GrNavigate } from 'react-icons/gr';
import type { ConfigContext, StructureBuilder } from 'sanity/desk';

export const structure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .icon(GrConfigure)
        .child(
          S.list()
            .title('Config')
            .items([
              S.listItem()
                .title('Menu config')
                .icon(GrNavigate)
                .child(S.document().schemaType('menuConfig').documentId('menuConfig')),
              S.listItem()
                .title('Footer config')
                .icon(GrNavigate)
                .child(S.document().schemaType('footerConfig').documentId('footerConfig')),
            ])
        ),
      S.divider(),
      //   S.listItem()
      //     .title('Landing page')
      //     .icon(GrHome)
      //     .child(
      //       S.document().title('Landing page').schemaType('landingPage').documentId('landingPage')
      //     ),
      S.documentTypeListItem('page').title('Pages'),
    ]);
