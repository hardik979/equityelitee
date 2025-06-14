"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

type Meteor = {
  key: string;
  position: number;
  animationDelay: string;
  animationDuration: string;
};

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // Generate meteors only after client mounts
    const newMeteors: Meteor[] = new Array(number).fill(true).map((_, idx) => {
      const position = idx * (800 / number) - 400;
      const animationDelay = Math.random() * 5 + "s";
      const animationDuration = Math.floor(Math.random() * (10 - 5) + 5) + "s";

      return {
        key: `meteor-${idx}`,
        position,
        animationDelay,
        animationDuration,
      };
    });
    setMeteors(newMeteors);
  }, [number]);

  // Don't render anything on server
  if (meteors.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor) => (
        <span
          key={meteor.key}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-green-400 shadow-[0_0_6px_2px_#22c55e50]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-green-400 before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px",
            left: `${meteor.position}px`,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </motion.div>
  );
};
