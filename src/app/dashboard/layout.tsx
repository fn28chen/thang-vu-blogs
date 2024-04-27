import TransitionTab from "@/utils/transition_tab";

export const metadata = {
  title: "Thang Vu // Dashboard",
  description: "Random stats and stuff related to me",
};
export default function DSLayout({ children }: { children: React.ReactNode }) {
  return (
    <TransitionTab>
      {children}
    </TransitionTab>
  );
}
