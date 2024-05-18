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
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useMediaQuery } from "usehooks-ts";

const Home = () => {
  const [blogs, setBlogs] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isDesktopOrLaptop = useMediaQuery("(min-deivce-width: 1024px)");
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
      className="w-full min-h-screen flex flex-col items-center md:max-w-[640px] lg:max-w-[800px]"
    >
      <div className="w-full px-8 py-12">
        <section className="flex gap-10 justify-between">
          <div>
            <AnimatedText
              text={["Vu Nguyen Duc Thang"]}
              className="dark:text-zinc-200 text-zinc-900 text-[44px] md:text-[52px] lg:text-[44px] m-0 font-extrabold"
              repeatDelay={5000}
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            />
            <p className="dark:text-zinc-400 text-zinc-700 text-sm  m-0">
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
              className="rounded-full shadow-xl min-w-32 h-[180px] m-0 hidden md:block"
              width={180}
              height={180}
            />
          </div>
        </section>
        <section className="flex flex-col gap-4 mt-12">
          <span className="font-bold text-2xl text-black dark:text-white">Recent Blogs</span>
          <div className="flex items-center justify-center">
            {loading ? (
              <div>
                <div className="flex flex-row items-center justify-center gap-4">
                  <SkeletonCard className="lg:block hidden" />
                  <SkeletonCard className="lg:block hidden" />
                  <SkeletonCard className="lg:block hidden" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 lg:hidden">
                  <SkeletonCardMobile className="block lg:hidden" />
                  <SkeletonCardMobile className="block lg:hidden" />
                  <SkeletonCardMobile className="block lg:hidden" />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-12 lg:w-full gap-4">
                {blogs.map((post) => (
                  <div className="col-span-4" key={post._id}>
                  <BlogCard ICardProps={post} />
                </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
