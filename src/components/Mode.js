'use client'
import { useState, useEffect } from "react";

export default function useDarkSide() {
  const mod = typeof window !== "undefined" ? localStorage.getItem("theme") : "light";
  const [theme, setTheme] = useState(mod);
  
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
