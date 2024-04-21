/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Stats from "@/components/global/stats";
import Footer from "@/components/layout/footer";
import spotifyData from "@/content/spotify.json";
import Link from "next/link";

// import Card from "@/components/layout/cardBase";
import { Card } from "@/components/ui/card";

import { FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { BLOG_INFO_DICT } from "@/lib/general_info";
import { IBlogCardProps } from "@/lib/type/card";

export default function Blogs() {
  // Use axios to fetch data from Spotify API
  // Example: https://api.spotify.com/v1/shows/{id}/episodes
  // with id = 4gNDdUh9g9ylzs00ODQd0Z
  const ref = useRef<HTMLDivElement>(null);
  const [openItem, setOpenItem] = useState<string>("");
  const [blogs, setBlogs] = useState<string[]>([]);
  const handleClickOutside = () => {
    setOpenItem("");
    console.log("clicked outside");
  };

  useOnClickOutside(ref, handleClickOutside);

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
        </div>
        <div className="flex flex-col gap-6">
          {Object.values(BLOG_INFO_DICT).map((blog: IBlogCardProps) => (
            <Card
              key={blog.id}
              className="flex flex-row text-justify px-4 py-4 gap-4"
            >
              <span>
                <h2 className="font-bold text-2xl">{blog.title}</h2>
                <p>{blog.brief_description}</p>
                <p>{blog.date.toDateString()}</p>
              </span>
              <span className="ml-auto items-center justify-center">
                <Link href={"/blogs" + blog.url}>
                  <Button>
                    Read More <FiExternalLink />
                  </Button>
                </Link>
              </span>
            </Card>
          ))}
          {/* {blogs.map((blogId, index) => {
            return <Card key={index} {...BLOG_INFO_DICT[blogId]} />;
          })} */}
        </div>

        <Footer />
      </section>
    </div>
  );
}
