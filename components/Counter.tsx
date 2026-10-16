"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  suffix?: string;
  isKFormat?: boolean; 
}

export default function Counter({
  value,
  direction = "up",
  suffix = "+",
  isKFormat = false,
}: CounterProps) {
  const spring = useSpring(direction === "down" ? value : 0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (latest) => {
    const currentNum = Math.floor(latest);
    if (isKFormat && currentNum >= 1000) {
      return (currentNum / 1000).toFixed(0) + "K";
    }
    return currentNum.toLocaleString();
  });

  useEffect(() => {
    spring.set(direction === "down" ? 0 : value);
  }, [spring, value, direction]);

  return (
    <span className="inline-flex items-center">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
