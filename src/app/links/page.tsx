import Footer from "@/components/layout/footer";
import LinksComponent from "@/components/global/link";

export default function Links() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3 text-[48px] font-bold justify-center pt-3">
          Links
        </h1>
        <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight pb-4">
          All my profile links to find me on the web.
        </p>
      </div>
      <LinksComponent />
      <Footer />
    </section>
  );
}
