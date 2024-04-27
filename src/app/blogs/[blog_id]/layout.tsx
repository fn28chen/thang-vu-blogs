import TransitionTab from "@/utils/transition_tab";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const metadata = {
  title: "Thang Vu // Blogs",
  description: "Random blogs",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TransitionTab>{children}</TransitionTab>;
}
