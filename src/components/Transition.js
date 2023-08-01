'use client'
import { motion } from "framer-motion"
export default function Transition() {
  return (
    <div>
        <motion.div className="w-screen h-screen bg-[#000] z-30 fixed bottom-0 top-0 right-full"
            initial={{x: "100%", width: "100%"}}
            animate={{x: "0%", width: "0%"}}
            transition={{duration: .6, ease: "easeInOut"}}
        />
        <motion.div className="w-screen h-screen bg-[#eb0bff] z-20 fixed bottom-0 top-0 right-full"
            initial={{x: "100%", width: "100%"}}
            animate={{x: "0%", width: "0%"}}
            transition={{duration: .6, ease: "easeInOut", delay: .2}}
        />
        <motion.div className="w-screen h-screen bg-[#ff3bbe] z-10 fixed bottom-0 top-0 right-full"
            initial={{x: "100%", width: "100%"}}
            animate={{x: "0%", width: "0%"}}
            transition={{duration: .6, ease: "easeInOut", delay: .4}}
        />
    </div>
  )
}
