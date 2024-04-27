import React from "react";
import Transition from "../../utils/transition";
import TransitionTab from "@/utils/transition_tab";
export const metadata = {
  title: "Thang Vu // Links",
  description: "All my profile links to find me on the web.",
  icon: "/",
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
