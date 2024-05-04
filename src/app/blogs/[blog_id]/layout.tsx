import { ScrollArea } from "@radix-ui/react-scroll-area";

export const metadata = {
  title: "Thang Vu // Blogs",
  description: "Random blogs",
};
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
