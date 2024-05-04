"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { readClient } from "../../sanity/lib/client";

import { motion } from "framer-motion";
import { slideInFromBot, fadeOut } from "@/utils/motion";

import Footer from "@/components/layout/footer";
import { ICardProps } from "@/lib/type/card";
import BlogCard from "@/components/ui/BlogCard";
import { Progress } from "@/components/ui/progress";
import { SkeletonCard } from "@/components/ui/skeletonCard";
import { SkeletonCardMobile } from "@/components/ui/skeletonCardMobile";
import avatar from "../../public/avatar.jpg";

const Home = () => {
  const [blogs, setBlogs] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await readClient.fetch(`*[_type == "post"]`);
      setTimeout(() => {
        setBlogs(response);
        setLoading(false);
      }, 1000);
    };
    fetchBlogs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeOut(0.5)}
      className="w-full min-h-screen pt-4 px-8 flex flex-col justify-center items-center relative"
    >
      <section
        className="
        flex flex-col gap-4
        fixed top-0 w-full h-full z-50 px-8 pt-12 pb-12 xl:w-[60%] lg:pl-8 lg:pr-8 lg:w-[calc(50% + 20vw)] md:pl-8 md:pr-8 md:w-[80%] sm:w-[70%]
        min-h-screen  relative
        "
      >
        <div className="flex flex-row gap-4 justify-between">
          <div className="leading-none">
            <h2 className="dark:text-zinc-200 text-zinc-900 text-[44px] m-0 font-extrabold md:block hidden">
              Vu Nguyen Duc Thang
            </h2>
            <h2 className="dark:text-zinc-200 text-zinc-900 text-[44px] m-0 font-extrabold md:hidden">
              Thang Vu
            </h2>
            <p className="dark:text-zinc-300 text-zinc-800 mb-4 m-0"></p>
            <p className="dark:text-zinc-400 text-zinc-700 text-sm text-justify m-0">
              I am a software engineer, a web developer, and a tech enthusiast.
              I love to learn and share my knowledge with others. Currently my
              job is working as a full-stack developer at a startup in Vietnam.
              I am passionate about web development, software engineering, and
              technology. Always looking for new opportunities to learn and grow
              as a developer.
            </p>
          </div>
          <div className="min-w-fit">
            <Image
              src={avatar}
              alt="avatar"
              className="rounded-full shadow-xl min-w-32 h-[180px] m-0"
              width={180}
              height={180}
            />
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-2xl">Recent Blogs</span>
          <div className="flex items-center justify-center">
            {loading ? (
              <div>
                <div className="flex flex-col items-center justify-center gap-4 md:flex">
                  <SkeletonCard className="md:block hidden" />
                  <SkeletonCard className="md:block hidden" />
                  <SkeletonCard className="md:block hidden" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 md:hidden">
                  <SkeletonCardMobile className="block md:hidden" />
                  <SkeletonCardMobile className="block md:hidden" />
                  <SkeletonCardMobile className="block md:hidden" />
                </div>
              </div>
            ) : (
              <div className="grid grid-rows-3 lg:grid-cols-3 w-[80%] lg:w-full gap-4">
                {blogs.map((post) => (
                  <BlogCard ICardProps={post} key={post._id} />
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </section>
    </motion.div>
  );
};

export default Home;
