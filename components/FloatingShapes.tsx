"use client";
import { motion } from "framer-motion";
import React from "react";

const FloatingShapes = () => {
  const shapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (120 - 60) + 60,
    rotation: Math.random() * 360,
    delay: Math.random() * 2,
    duration: Math.random() * 5 + 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: shape.rotation }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation],
            y: [0, -30, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10"
            style={{
              clipPath:
                shape.id % 2 === 0
                  ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                  : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
