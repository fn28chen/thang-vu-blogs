"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "./motion";

export default function TransitionTab({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeIn(0.5)}
      className="fixed top-0 w-4/5 h-full z-50 block px-8 pt-4 lg:pl-8 lg:pr-8 lg:w-[50%] lg:block md:pl-8 md:pr-8 md:w-[80%] md:block">
      {children}
    </motion.div>
  );
}
