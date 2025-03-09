// Mark this file as a Client Component
"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }} // Ensures it only animates once when 10% of it is in view
      className="hi-screen flex-1 p-4"
      id="case-studies"
    >
      About
    </motion.section>
  );
}
