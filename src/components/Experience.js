"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

function Details({ position, company, companyLink, time, addres, work }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" mx-auto my-6 last:mb-0 first:mt-0 flex flex-col items-center justify-between"
    >
      <motion.div
        className="pr-4"
      >
        <h3 className="capitalize font-bold text-lg lg:text-4xl">
          {position}&nbsp;{" "}
          <a className="text-red-500" href={companyLink}>
            {company}
          </a>
        </h3>
        <span className="lg:text-2xl text-gray-800 dark:text-white/70">
          {time} | {addres}
        </span>
        <p className="lg:text-2xl font-semibold w-full">{work}</p>
      </motion.div>
    </li>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h1 className="text-3xl font-bold w-full mb-10 lg:text-5xl">Experience</h1>
      <div ref={ref} className="relative w-[85%] mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-6 w-[4px] lg:w-[6px] top-0 h-full dark:bg-white bg-black origin-top "
        />
        <ul className="ml-4 justify-between flex-col w-full flex items-start">
          <Details
            position="Software Engineer"
            company="@Google"
            companyLink="www.google.com"
            time="2022-Present"
            addres="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern"
            company="@Facebook"
            companyLink="www.google.com"
            time="Summer 2021"
            addres="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
            share short-form video content, including designing and implementing a new user interface and developing 
            the backend infrastructure to support the feature."
          />
          <Details
            position='Software Developer' 
            company='@Amazon'
            time='2020-2021'
            addres='Seattle, WA.'
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
            as product recommendations and user reviews, and optimizing the app's performance and reliability."
            />
        </ul>
      </div>
    </div>
  );
}
