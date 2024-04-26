"use client";
import Footer from "@/components/layout/footer";
import { ICardProps } from "@/lib/type/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { readClient } from "../../sanity/lib/client";
import { Card } from "@/components/ui/card";

const Home = (props: {}) => {
  const [blogs, setBlogs] = useState<ICardProps[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await readClient.fetch(`*[_type == "post"]`);
      setBlogs(response);
    };
    fetchBlogs();
  }, []);
  return (
    <div className="w-full min-h-screen pt-4 px-8 flex flex-col justify-center items-center relative">
      <section
        className="
        flex flex-col gap-4
        fixed top-0 w-full h-full z-50 px-8 pt-12 pb-12 xl:w-[66%] lg:pl-8 lg:pr-8 lg:w-[calc(50% + 20vw)] md:pl-8 md:pr-8 md:w-[80%] sm:w-[70%]
        min-h-screen p-8 relative
        "
      >
        <div className="flex flex-row gap-4">
          <div className="leading-none">
            <h2 className="dark:text-zinc-200 text-zinc-900 text-[44px] m-0 font-extrabold md:block hidden">
              Vu Nguyen Duc Thang
            </h2>
            <h2 className="dark:text-zinc-200 text-zinc-900 text-[44px] m-0 font-extrabold md:hidden">
              Thang Vu
            </h2>
            <p className="dark:text-zinc-300 text-zinc-800 mb-4 m-0"></p>
            <p className="dark:text-zinc-400 text-zinc-700 text-sm text-justify m-0">
              Learning about web and trying to help out other devs in the
              process. I love open source and writing about tech occasionally.
            </p>
          </div>
          <div className="min-w-fit">
            <Image
              src="https://avatars.githubusercontent.com/u/68690233?v=4"
              alt="avatar"
              className="rounded-full shadow-xl min-w-32 h-32 grayscale m-0"
              width={128}
              height={128}
            />
          </div>
        </div>
        <span className="font-bold text-2xl">Recent Blogs</span>
        <div className="grid grid-rows-3 lg:grid lg:grid-cols-3 gap-4">
          {blogs?.length > 0 ? (
            blogs.map((post) => (
              <Card
                key={post._id}
                className="flex flex-col text-justify justify-between px-4 py-4 gap-4"
              >
                <span className="flex flex-col gap-2 justify-between h-full">
                  <h2 className="font-bold">{post.title}</h2>
                  <p className="mt-auto text-[12px]">{post._createdAt}</p>
                </span>
              </Card>
            ))
          ) : (
            <div className="flex flex-row text-justify justify-between px-4 py-4 gap-4">
              <span className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">No blogs yet</h2>
                <p className="">Check back later</p>
              </span>
            </div>
          )}
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
