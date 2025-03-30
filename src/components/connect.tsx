// Mark this file as a Client Component
"use client";

import { motion } from "framer-motion";

const Connect = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.1 }} // Ensures it only animates once when 10% of it is in view
      className="hi-screen flex-1 p-4"
      id="connect"
    >
      Connect
    </motion.section>
  );
};

export default Connect;
