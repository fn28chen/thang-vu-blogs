"use client";
import Footer from "@/components/layout/footer";
import AboutMe from "@/content/about-me.mdx";
import { motion } from "framer-motion";
import { fadeOut } from "@/utils/motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeOut(0.5)}
      className="w-full min-h-screen h-full flex flex-col items-center relative"
    >
      <section className="mb-12 mt-8 flex flex-col w-[80%] justify-center gap-6 text-justify md:mt-0 lg:mt-0">
        <div
          className="overflow-y-auto bg-white dark:bg-inherit custom-scrollbar text-justify px-2"
          style={{ maxHeight: "80vh" }}
        >
          <AboutMe />
        </div>
        <Footer />
      </section>
    </motion.div>
  );
}
