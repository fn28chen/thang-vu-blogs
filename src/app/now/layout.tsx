export const metadata = {
  title: "Thang Vu // Present",
  description: "What I'm doing now.",
  icon: "/",
};
export default function NowLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="top-0 w-4/5 h-full z-50 block px-8 pt-4 xl:w-1/2 lg:pl-8 lg:pr-8 lg:w-[calc(50% + 33.33vw)] md:pl-8 md:pr-8 md:w-[80%]">
      {children}
    </section>
  );
}
