"use client";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./Mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (check) => {
    setTheme(colorTheme);
    setDarkSide(check)
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={25}
        className={`m-0 p-0 text-${darkSide ? "white" : "black"} bg-${
          darkSide ? "black" : "white"
        } rounded-full`}
      />
    </>
  );
}