import { ICardProps } from "@/lib/type/card";
import { Card } from "./card";
import { SampleImageComponent } from "../ui/imageComponent";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { slideInFromBot } from "@/utils/motion";

export default function BlogCard({
  ICardProps,
  ...props
}: {
  ICardProps: ICardProps;
}) {
  return (
    <Card
      key={ICardProps._id}
      className="flex flex-col text-justify justify-between px-4 py-4 gap-4 border-zinc-400 border-4 duration-200 hover:shadow-lg hover:-translate-y-1"
    >
      <span className="flex flex-col gap-2 justify-between h-full">
        <h2 className="font-bold">{ICardProps.title}</h2>
        <div className="w-[180px]">
          <SampleImageComponent value={ICardProps.mainImage} isInline={false} />
        </div>
        <div className="flex flex-row justify-between">
          <p className="mt-auto text-[12px]">{ICardProps._createdAt}</p>
          <Link
            href={ICardProps.slug ? `/blogs/${(ICardProps.slug as any).current}` : "/blogs"}
          >
            <FiExternalLink />
          </Link>
        </div>
      </span>
    </Card>
  );
}
