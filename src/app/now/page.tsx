"use client";
import Footer from "@/components/layout/footer";
import NowMD from "@/content/now-md.mdx";
export default function Now() {
  return (
    <section className="w-full">
      <div className="bg-white dark:bg-inherit">
        <NowMD />
      </div>
      <p className="text-[0.6rem] text-zinc-600 dark:text-zinc-400">
        Last Updated{" "}
        <span className="text-[0.6rem] text-zinc-700 underline decoration-dotted underline-offset-4 dark:text-zinc-300">
          {new Date().toLocaleDateString()}
        </span>
      </p>
      <Footer />
    </section>
  );
}
