"use client";
import { motion } from "framer-motion";
import React from "react";

const GlassBalls = () => {
  // Generate random positions for the glass balls
  const balls = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (100 - 40) + 40, // Random size between 40px and 100px
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: ball.size,
            height: ball.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: ball.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20" />
        </motion.div>
      ))}
    </div>
  );
};

export default GlassBalls;
