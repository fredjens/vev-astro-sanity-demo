import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schema from "./schema";

export default defineConfig({
  projectId: "sp8ouolu",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schema,
  },
});
