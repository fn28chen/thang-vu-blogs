import Footer from "@/components/layout/footer";
import LinksComponent from "@/components/global/link";

export default function Links() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center relative">
      <section className="prose mt-12 flex w-full flex-col justify-between text-justify gap-6 md:mt-0 lg:mt-0">
        <div className="flex flex-col gap-6">
          <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 text-[48px] font-bold justify-center pt-3">
            Links
          </h1>
          <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight">
            All my profile links to find me on the web.
          </p>
        </div>
        <LinksComponent />
        <Footer />
      </section>
    </div>
  );
}
