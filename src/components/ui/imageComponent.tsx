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
        .width(160)
        .height(90)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio: 16 / 9,
      }}
      width={160}
      height={90}
      className="w-[160px] h-[90px]"
    />
  );
};
