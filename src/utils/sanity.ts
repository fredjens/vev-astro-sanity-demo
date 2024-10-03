import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "sp8ouolu",
  dataset: "production",
  token: import.meta.env.SANITY_API_TOKEN,
  useCdn: false,
};

const sanityClient = createClient(config);

export const sanityImage = imageUrlBuilder(sanityClient);

export default sanityClient;
