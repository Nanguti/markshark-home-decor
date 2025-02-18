"use client";
import { motion } from "framer-motion";
import React from "react";

const FlowingGradient = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      style={{
        background:
          "linear-gradient(45deg, #00203f, #00305f, #004080, #00203f)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
    </motion.div>
  );
};

export default FlowingGradient;
