"use client";
import Footer from "@/components/layout/footer";
import NowMD from "@/content/now-md.mdx";
export default function Now() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center">
      <section className="prose mt-8 flex w-[80%] flex-col justify-between  gap-6 md:mt-0 lg:mt-0">
        <div
          className="overflow-y-auto bg-white dark:bg-inherit custom-scrollbar  px-2"
          style={{ maxHeight: "80vh" }}
        >
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
    </div>
  );
}
