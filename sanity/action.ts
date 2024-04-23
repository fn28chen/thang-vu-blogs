//action.ts
import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  tags: string;
  page: string; //pagination
}

export const getResources = async (params: GetResourcesParams) => {
  // destructure the params
  const { query, tags, page } = params;

  //sanity/action.ts
  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        tags,
        page: parseInt(page),
      })}{
        _id,
        title,
        slug,
        readingTime,
        views,
        releaseDate,
        overview,
        "image": poster.asset->url,
        tags,
        content,
      }`
    );

    return resources;
  } catch (error) {
    console.error(error);
  }
};
