import { type DefaultDocumentNodeResolver } from "sanity/structure";
import { Iframe } from "sanity-plugin-iframe-pane";
import { type SanityDocument } from "sanity";
import { debounce } from "./utils/debounce";

async function getPreviewUrl(doc: SanityDocument) {
  const slug = doc._id;
  const url = slug
    ? `${window.location.origin}/${slug}?timestamp=${Date.now()}`
    : `${window.location.origin}`;
  return await debounce(1000)(url);
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: async (doc: SanityDocument) => await getPreviewUrl(doc),
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
