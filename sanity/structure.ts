import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Admin | Mercy Okwoli')
    .items([
      S.documentTypeListItem('admin'),
      S.documentTypeListItem('resume'),
      S.documentTypeListItem('project'),
      S.documentTypeListItem('contact'),
      S.divider(),
      S.listItem()
        .title('Sub Documents') // Subtitle
        .child(
          S.list()
            .title('Sub Documents') // Title for the group
            .items([
              ...S.documentTypeListItems().filter(
                (item) =>
                  item.getId() &&
                  !['admin', 'resume', 'project', 'contact'].includes(
                    item.getId()!,
                  ),
              ),
            ]),
        ),
    ])
