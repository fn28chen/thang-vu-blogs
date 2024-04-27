import TransitionTab from "@/utils/transition_tab";

export const metadata = {
  title: "Thang Vu // Present",
  description: "What I'm doing now.",
  icon: "/",
};
export default function NowLayout({ children }: { children: React.ReactNode }) {
  return (
    <TransitionTab>
      {children}
    </TransitionTab>
  );
}
