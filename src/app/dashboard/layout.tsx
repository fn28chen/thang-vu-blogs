export const metadata = {
  title: "Thang Vu // dashboard",
  description: "Random stats and stuff related to me",
};
export default function DSLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="fixed top-0 w-4/5 h-full z-50 block px-8 pt-4 lg:pl-8 lg:pr-8 lg:w-[50%] lg:block md:pl-8 md:pr-8 md:w-[60%] md:block">
      {children}
    </section>
  );
}
