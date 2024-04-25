//sanity/lib/client.ts
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});

// export const writeClient = createClient({
//   apiVersion,
//   dataset,
//   projectId,
//   useCdn,
//   token,
// });