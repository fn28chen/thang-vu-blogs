import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../../../sanity/env";
import Image from "next/image";

export const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
  return (
    <Image
      src={urlBuilder(client)
        .image(value)
        .width(isInline ? 200 : width)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio: 16 / 9,
      }}
      className="flex items-center justify-center"
    />
  );
};
