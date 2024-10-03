import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import blocksToHtml from "@sanity/block-content-to-html";

const config = {
  projectId: "sp8ouolu",
  dataset: "production",
  token: import.meta.env.SANITY_API_TOKEN,
};

const sanityClient = createClient(config);

export const sanityImage = imageUrlBuilder(sanityClient);

export const sanityBlockToHtml = (data: any) => blocksToHtml({ blocks: data });

export default sanityClient;
