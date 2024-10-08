// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: "sp8ouolu",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: false,
      studioBasePath: "/studio",
    }),
  ],
});
