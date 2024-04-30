"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeOut } from "./motion";

export default function Transition({
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
      className="flex w-full px-1 md:px-2 lg:px-4 items-center justify-center pt-16 md:pt-0"
    >
      {children}
    </motion.div>
  );
}
