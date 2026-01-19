import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_PROJECT_ID ?? "your-project-id";
const dataset = process.env.SANITY_DATASET ?? "production";

export default defineConfig({
  name: "default",
  title: "Dumatel",
  projectId,
  dataset,
  plugins: [],
  schema: {
    types: schemaTypes,
  },
});
