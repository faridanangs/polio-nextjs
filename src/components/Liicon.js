"use client";
import { motion, useScroll } from "framer-motion";
export default function Liicon({refrence}) {
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute -left-[60px] top-0 stroke-black">
      <svg className="-rotate-90" width='75' height='75' viewBox="0 0 100 100">
        <circle
          cx='75'
          cy='50'
          r='20'
          className="stroke-purple-500 stroke-1 fill-none"
        />
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          className="stroke-[5px] fill-lime-50 "
            style={{pathLength: scrollYProgress}}
        />
        <circle cx='75' cy='50' r='10' className="animate-pulse stroke-purple-500 stroke-1" />
      </svg>
    </figure>
  );
}
