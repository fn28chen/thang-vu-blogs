'use client';
import AboutMe from "@/content/about-me.mdx";
import twMerge from "tailwind-merge"
export default function About() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center p-8">
      <section className="mb-12 mt-16 flex flex-col w-full justify-center gap-6 text-justify md:mt-0 lg:mt-0">
        <AboutMe/>
      </section>
    </div>
  );
}
