import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schema from "./sanity/schema";
import { defaultDocumentNode } from "./sanity/defaultDocumentNode";

export default defineConfig({
  projectId: "sp8ouolu",
  dataset: "production",
  plugins: [structureTool({ defaultDocumentNode }), visionTool()],
  schema: {
    types: schema,
  },
});
