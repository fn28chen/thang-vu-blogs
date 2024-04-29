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
      className="min-h-screen flex flex-col justify-center items-center top-0 w-4/5 h-full lg:w-[60%] md:w-[80%] px-8 pt-4 lg:px-8 lg:py-4 md:px-8 md:py-8"
    >
      {children}
    </motion.div>
  );
}
