"use client";
import Footer from "@/components/layout/footer";
import AboutMe from "@/content/about-me.mdx";
export default function About() {
  return (
    <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
      <section className="mb-12 mt-16 flex flex-col w-full justify-center gap-6 text-justify md:mt-0 lg:mt-0">
        <AboutMe />
        <Footer />
      </section>
    </div>
  );
}
