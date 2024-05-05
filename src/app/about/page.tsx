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
      className="w-full items-center"
    >
      <section className="bg-white dark:bg-inherit custom-scrollbar">
        <AboutMe />
      </section>
      <Footer />
    </motion.div>
  );
}
