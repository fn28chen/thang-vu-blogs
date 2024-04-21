/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Footer from "@/components/layout/footer";
import path from "path";
import dynamic from "next/dynamic";

import { BLOG_INFO_DICT } from "@/lib/general_info";
import { IBlogCardProps } from "@/lib/type/card";
import { usePathname } from "next/navigation";

export default function Blog() {

  const pathname = usePathname().split("/").slice(usePathname().split("/").indexOf("blogs") + 1)[0];
  const blog = BLOG_INFO_DICT[pathname];
  const filePath = path.join(process.cwd(), "src", "content", "markdown", blog.file);

  console.log(pathname);
  console.log(blog);

  const [DynamicComponent, setDynamicComponent] = useState<React.ComponentType<{}> | null>(null);

  useEffect(() => {
    const importComponent = async () => {
      const component = await dynamic(() => import(`@/content/markdown/${blog.file}`));
      setDynamicComponent(() => component);
    };

    importComponent();
  }, []);

  return (
    <div className="w-full h-full p-8 flex flex-col items-center relative">
      <section className="flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose prose-a:no-underline gap-6 mb-12">
        <div>
          <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 text-4xl font-bold">
            My Blogs
          </h1>
          <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight">
            Random stats and stuff related to me.
          </p>
          <div className="overflow-y-auto bg-white dark:bg-inherit custom-scrollbar" style={{ maxHeight: '80vh'}}>
            {DynamicComponent && <DynamicComponent />}
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
