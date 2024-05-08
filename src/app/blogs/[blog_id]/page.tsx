"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { motion, useScroll } from "framer-motion";

import { Post } from "../../../../sanity/lib/interface";
import { readClient } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

import { ArrowLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";

import { LoadingPage } from "@/components/global/loading";
import { SampleImageComponent } from "@/components/ui/imageComponent";
export default function Blog() {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const pathname = usePathname()
    .split("/")
    .slice(usePathname().split("/").indexOf("blogs") + 1)[0];

  // Fetch the current blog
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await readClient.fetch(`*[_type=="post" && slug.current=="${pathname}"]{
        _id,
        title,
        slug,
        _createdAt,
        mainImage,
        author->{
          name,
          image,
        },
        description,
        body,
        label,
      }`);
      setBlogs(response);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);


  // Show button when page is scrolled down 66vh
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.screenY > window.innerHeight * 0.66) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const components = {
    types: {
      image: SampleImageComponent,
    },
  };

  return (
    <section className="w-full">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <LoadingPage />
        </div>
      ) : (
        <motion.div
          
        >
          <div className="flex flex-row gap-4 pb-12">
            <Button
              variant="outline"
              onClick={() => {
                router.back();
              }}
            >
              <ArrowLeft size={24} />
            </Button>
            <p className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 text-4xl font-bold">
              {blogs && (blogs[0]?.title ?? "Blog")}
            </p>
          </div>
          <div className="bg-white dark:bg-inherit">
            {blogs ? (
              <article id="blog" key={blogs[0]?._id}>
                {blogs[0].description && <p>{blogs[0].description}</p>}
                <p>{blogs[0]?._createdAt}</p>
                {blogs[0]?.author && (
                  <p>Author: {blogs[0]?.author.name ?? "Anonymous"}</p>
                )}
                <hr />
                <div className="pt-12">
                  <PortableText
                    value={
                      blogs[0].body ??
                      "There is no content currently! The content will be updated soon."
                    }
                    components={components}
                  />
                  {isVisible && (
                    <Button
                      variant="outline"
                      onClick={scrollToTop}
                      className="fixed bottom-4 right-4"
                    >
                      <ArrowUp size={24} />
                    </Button>
                  )}
                </div>
              </article>
            ) : (
              <LoadingPage />
            )}
          </div>
        </motion.div>
      )}
      <Footer />
    </section>
  );
}
