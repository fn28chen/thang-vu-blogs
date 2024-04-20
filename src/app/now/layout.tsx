export const metadata = {
  title: "Thang Vu // Present",
  description: "What I'm doing now.",
  icon: "/",
};
export default function NowLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="fixed top-0 w-4/5 h-full z-50 block px-8 pt-4 lg:pl-8 lg:pr-8 lg:w-[50%] lg:block md:pl-8 md:pr-8 md:w-[60%] md:block">
      {children}
    </section>
  );
}
