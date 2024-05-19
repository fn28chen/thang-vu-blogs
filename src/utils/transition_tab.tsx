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
      
      className="px-8 py-8 w-full min-h-screen md:max-w-[640px] lg:max-w-[800px]"
    >
        {children}
    </motion.div>
  );
}
