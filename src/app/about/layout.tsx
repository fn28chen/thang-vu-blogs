export const metadata = {
  title: "Thang Vu // About Me",
  description: "What I'm doing now.",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="fixed top-0 w-4/5 h-full z-50 block px-8 pt-4 lg:pl-8 lg:pr-8 lg:w-[50%] lg:block md:pl-8 md:pr-8 md:w-[80%] md:block">
      {children}
    </section>
  );
}
