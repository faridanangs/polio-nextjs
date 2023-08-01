"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile from "/public/profile.webp";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

function AnimateNumber({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isView = useInView(ref, { once: true });

  useEffect(() => {
    if (isView) {
      motionValue.set(value);
    }
  }, [isView, value, motionValue]);

  useEffect(() => {
    springValue.on(
      "change",
      (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      },
      [value, springValue]
    );
  });
  return <span ref={ref}></span>;
}

export default function About() {
  return (
    
    <div className="px-8 pt-4 pb-[5rem] lg:px-20">
      {/* Image and Text */}
      <div className="flex flex-col md:flex-row gap-8 items-start md:mt-8 lg:gap-12">
        {/* Client */}
        <div className="hidden lg:flex gap-12 items-start h-full justify-between flex-col">
          <div className="w-[80px] md:w-full text-center">
            <span className="text-3xl font-bold md:text-6xl md:font-bold">
              <AnimateNumber value={1} />+
            </span>
            <h1 className="text-center md:text-xl w-full">Satisfied Client</h1>
          </div>
          <div className="w-[80px] md:w-full text-center">
            <span className="text-3xl font-bold md:text-6xl md:font-bold">
              <AnimateNumber value={3} />+
            </span>
            <h1 className="text-center md:text-xl w-full">
              Projects Completed
            </h1>
          </div>
          <div className="w-[80px] md:w-full text-center">
            <span className="text-3xl font-bold md:text-6xl md:font-bold">
              <AnimateNumber value={4} />+
            </span>
            <h1 className="text-center md:text-xl w-full">
              Mounts Of Experience
            </h1>
          </div>
        </div>
        {/* Image Content */}
        <div
          className="relative mx-auto h-max w-[85%] p-6
        border-2 border-black rounded-xl dark:border-white bg-port_bg dark:bg-black
        lg:w-[70%] lg:h-[53vh]
        "
        >
          <div className="bg-black absolute w-[102%] h-[102%] -right-3 -bottom-3 rounded-3xl -z-[100] dark:bg-white" />
          <Image
            src={profile}
            alt="Image About"
            className="object-cover border-2 w-full h-full border-[#6e6e6e]"
          />
        </div>
        {/* Text Content */}
        <div className="mt-8 md:max-w-xs md:mt-0">
          <h1 className="text-2xl font-bold mb-2 opacity-90 lg:text-4xl">
            BIOGRAPHY
          </h1>
          <p className="lg:text-xl">
            Assalamualaikum wr wb.
            <br />
            Hello my name is farid anang samudra im from Ntb Lombok-Barat. <br />
            Now im 17th years old.
          </p>
          <br />
          <p className="lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            itaque aliquid enim temporibus placeat natus incidunt ut veritatis
            expedita ducimus? Placeat dolorum officia illum reprehenderit,
            cumque totam minima maxime debitis.
          </p>
        </div>
      </div>

      {/* Client */}
      <div className="lg:hidden flex items-center justify-between my-8 md:my-20">
        <div className="w-[80px] md:w-full text-center">
          <span className="text-3xl font-bold md:text-6xl md:font-bold">
            <AnimateNumber value={1} />+
          </span>
          <h1 className="text-center md:text-xl w-full">Satisfied Client</h1>
        </div>
        <div className="w-[80px] md:w-full text-center">
          <span className="text-3xl font-bold md:text-6xl md:font-bold">
            <AnimateNumber value={3} />+
          </span>
          <h1 className="text-center md:text-xl w-full">Projects Completed</h1>
        </div>
        <div className="w-[80px] md:w-full text-center">
          <span className="text-3xl font-bold md:text-6xl md:font-bold">
            <AnimateNumber value={4} />+
          </span>
          <h1 className="text-center md:text-xl w-full">
            Mounts Of Experience
          </h1>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-[4rem]">
        <Skills />
      </div>

      {/* Experience */}
      <div className="">
        <Experience />
      </div>

      {/* Education */}
      <div className="">
        <Education />
      </div>
    </div>
  );
}
