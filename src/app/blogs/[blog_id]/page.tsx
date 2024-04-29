"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/layout/footer";
import { Post } from "../../../../sanity/lib/interface";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { readClient } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { LoadingPage } from "@/components/global/loading";
import { SampleImageComponent } from "@/components/ui/imageComponent";

export default function Blog() {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const pathname = usePathname()
    .split("/")
    .slice(usePathname().split("/").indexOf("blogs") + 1)[0];

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await readClient.fetch(`*[_type == "post"
      && slug.current == "${pathname}"
      ]`);
      setBlogs(response);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  const components = {
    types: {
      image: SampleImageComponent,
    },
  };

  return (
    <div className="w-full h-full  flex flex-col items-center relative bottom-10">
      <section className="flex flex-col w-full justify-between mt-8 lg:mt-0 md:mt-0 prose prose-a:no-underline gap-6 mb-12">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <LoadingPage />
          </div>
        ) : (
          <div>
            <div className="flex flex-row gap-4">
              <Button variant="outline" onClick={() => {
                router.back();
              }}>
                <ArrowLeft size={24} />
              </Button>
              <p className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 text-4xl font-bold">
                Blogs
              </p>
            </div>
            <div
              className="overflow-y-auto bg-white dark:bg-inherit custom-scrollbar text-justify px-2"
              style={{ maxHeight: "80vh" }}
            >
              {blogs?.length > 0 ? (
                blogs.map((post) => (
                  <div key={post._id} className="p-4">
                    <h2 className="">{post.title}</h2>
                    <p className="">{post.description}</p>
                    <p className="">{post._createdAt}</p>
                    <p className="p-4">{post.author.name}</p>
                    <PortableText value={post.body} components={components} />
                  </div>
                ))
              ) : (
                <LoadingPage />
              )}
            </div>
          </div>
        )}
        <Footer />
      </section>
    </div>
  );
}
