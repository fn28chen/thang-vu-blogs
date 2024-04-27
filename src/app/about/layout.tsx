import TransitionTab from "@/utils/transition_tab";

export const metadata = {
  title: "Thang Vu // About Me",
  description: "What I'm doing now.",
};
export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionTab>
      {children}
    </TransitionTab>
  );
}
