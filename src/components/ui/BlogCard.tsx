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
      className="flex flex-col text-justify justify-between px-4 py-4 gap-4 border-zinc-400 border-4 duration-200 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
    >
      <span className="flex flex-col gap-2 justify-between h-full">
        <div className="w-full filter hover:blur-[40px] transition-all duration-300 items-center justify-center">
          <SampleImageComponent value={ICardProps.mainImage} isInline={false} />
        </div>
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-first justify-start"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          variants={slideInFromBot(0.5)}
        >
          <div className="flex flex-row justify-between">
          <Link
            href={
              ICardProps.slug
                ? `/blogs/${(ICardProps.slug as any).current}`
                : "/blogs"
            }
            className="bottom-0"
          >
              <h2 className="md:text-ellipsis 
              ">{ICardProps.title}</h2>
          </Link>
          </div>
        </motion.div>
        <div className="flex flex-row justify-between filter hover:blur-[10px] transition-all duration-300">
          <p className="mt-auto text-[12px]">
            {new Date(ICardProps._createdAt).toLocaleDateString()}
          </p>
        </div>
      </span>
    </Card>
  );
}