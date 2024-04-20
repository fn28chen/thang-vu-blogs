export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="
      fixed top-0 
      w-full h-full z-50 block 
      px-8 pt-4
      lg:pl-24 lg:pr-8 lg:w-[80%] lg:block
      md:pl-16 md:pr-8 md:w-[80%] md:block
    "
    >
      {children}
    </section>
  );
}
