"use client";

import Image from "next/image";
import React, { useState } from "react";

const skills = [
  {
    id: "1",
    type: "framework",
    img: "/img/next.webp",
    title: "NextJS",
  },
  {
    id: "2",
    type: "framework",
    img: "/img/bootsrap.webp",
    title: "Bootsrap",
  },
  {
    id: "3",
    type: "framework",
    img: "/img/tailwind.webp",
    title: "Tailwind",
  },
  {
    id: "4",
    type: "framework",
    img: "/img/django.webp",
    title: "Django",
  },
  {
    id: "5",
    type: "library",
    img: "/img/react.webp",
    title: "ReactJS",
  },
  {
    id: "6",
    img: "/img/css.webp",
    type: "other",
    title: "Css",
  },
  {
    id: "7",
    img: "/img/python.webp",
    type: "other",
    title: "Python",
  },
  {
    id: "8",
    img: "/img/js.webp",
    type: "other",
    title: "Javascript",
  },
  {
    id: "9",
    img: "/img/html.webp",
    type: "other",
    title: "Html",
  },
];

const skillsType = [
  {
    id: 1,
    type: "other",
    title: "All",
  },
  {
    id: 2,
    type: "framework",
    title: "Framework",
  },
  {
    id: 3,
    type: "library",
    title: "Library",
  },
];

export default function Skills() {
  const [skill, setSkill] = useState("other");
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mb-8 lg:text-6xl lg:my-12">Skills</h1>
      <div>
        <div className="flex justify-between items-center px-4 py-1 font-bold md:max-w-sm md:mx-auto">
          {skillsType.map((skill) => (
            <h1
              key={skill.id}
              className="underline text-xl lg:text-3xl hover:cursor-pointer hover:underline-offset-2 hover:decoration-red-700"
              onClick={() => setSkill(skill.type)}
            >
              {skill.title}
            </h1>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <HandleSkills type={skill} />
      </div>
    </div>
  );
}

const HandleSkills = ({ type }) => {
  const other = skills.filter((skill) => skill.type === type);
  return (
    <div
      className="flex p-8 gap-4 w-full flex-wrap 
      justify-between items-center md:max-w-[20rem] md:mx-auto
      dark:bg-white dark:text-black rounded-sm  "
    >
      {other.map((skill) => (
        <div
          key={skill.id}
          className="
            text-center
              "
        >
          <Image
            src={skill.img}
            alt={skill.title}
            width={80}
            height={80}
            className="object-contain"
          />
          <h1 className="lg:text-xl">{skill.title}</h1>
        </div>
      ))}
    </div>
  );
};
