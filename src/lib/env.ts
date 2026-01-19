const projectId =
  process.env.SANITY_PROJECT_ID ??
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  "";

const dataset =
  process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

const apiVersion = process.env.SANITY_API_VERSION ?? "2024-01-01";

const readToken = process.env.SANITY_READ_TOKEN ?? null;

export const env = {
  sanity: {
    projectId,
    dataset,
    apiVersion,
    readToken,
  },
};

export const hasSanityConfig = Boolean(projectId && dataset);
