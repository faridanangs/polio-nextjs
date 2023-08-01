"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

function Details({ school, date, jurusan, desc }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" mx-auto my-6 last:mb-0 first:mt-0 flex flex-col items-center justify-between"
    >
      <motion.div className="pr-4">
        <h3 className="capitalize text-red-600 font-bold text-lg lg:text-4xl">{school}</h3>
        <span className="lg:text-2xl text-gray-800 dark:text-white/70">
          {date} | {jurusan}
        </span>
        <p className="lg:text-2xl font-semibold w-full">{desc}</p>
      </motion.div>
    </li>
  );
}

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h1 className="text-3xl font-bold w-full mb-10 lg:text-5xl">Education</h1>
      <div ref={ref} className="relative w-[85%] mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-6 w-[4px] lg:w-[6px] top-0 h-full dark:bg-white bg-black origin-top "
        />

        <ul className="ml-4 justify-between flex-col w-full flex items-start">
          <Details
            school="Min 2 Lobar"
            date="2012-2018"
            jurusan=""
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta hic repellendus vitae? Doloremque deleniti aliquid expedita at nostrum error aliquam quas voluptate explicabo. Excepturi, alias fugit dolore eaque quis qui."
          />
          <Details
            school="Smpn 1 Gunungsari"
            date="2018-2021"
            jurusan=""
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta hic repellendus vitae? Doloremque deleniti aliquid expedita at nostrum error aliquam quas voluptate explicabo. Excepturi, alias fugit dolore eaque quis qui."
          />
          <Details
            school="Sman 1 Gunungsari"
            date="2021-2024"
            jurusan="Ipa"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta hic repellendus vitae? Doloremque deleniti aliquid expedita at nostrum error aliquam quas voluptate explicabo. Excepturi, alias fugit dolore eaque quis qui."
          />
        </ul>
      </div>
    </div>
  );
}
