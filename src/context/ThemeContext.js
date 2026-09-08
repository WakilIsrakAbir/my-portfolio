"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  accentColor: "green",
  setAccentColor: () => {},
  scheme: "dark",
  setScheme: () => {},
  density: "compact",
  setDensity: () => {},
  mounted: false,
});

export function ThemeProvider({ children }) {
  const [accentColor, setAccentColor] = useState("green");
  const [scheme, setScheme] = useState("dark");
  const [density, setDensity] = useState("compact");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let savedAccent = localStorage.getItem("abir-accent") || "green";
    let savedScheme = localStorage.getItem("abir-scheme") || "dark";
    let savedDensity = localStorage.getItem("abir-density") || "compact";

    // If previously saved scheme was green, reset to dark
    if (savedScheme === "green") {
      savedScheme = "dark";
      localStorage.setItem("abir-scheme", "dark");
    }

    setAccentColor(savedAccent);
    setScheme(savedScheme);
    setDensity(savedDensity);

    applyTheme(savedAccent, savedScheme, savedDensity);
    setMounted(true);
  }, []);

  const applyTheme = (accent, currentScheme, currentDensity) => {
    const root = document.documentElement;
    root.setAttribute("data-accent", accent);
    root.setAttribute("data-density", currentDensity);

    let effectiveTheme = currentScheme;
    if (currentScheme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      effectiveTheme = prefersDark ? "dark" : "light";
    }

    root.setAttribute("data-theme", effectiveTheme);

    if (effectiveTheme === "dark") {
      root.classList.remove("light", "green");
      root.classList.add("dark");
    } else {
      // Light mode
      root.classList.remove("dark", "green");
      root.classList.add("light");
    }
  };

  const updateAccentColor = (newAccent) => {
    setAccentColor(newAccent);
    localStorage.setItem("abir-accent", newAccent);
    applyTheme(newAccent, scheme, density);
  };

  const updateScheme = (newScheme) => {
    setScheme(newScheme);
    localStorage.setItem("abir-scheme", newScheme);
    applyTheme(accentColor, newScheme, density);
  };

  const updateDensity = (newDensity) => {
    setDensity(newDensity);
    localStorage.setItem("abir-density", newDensity);
    applyTheme(accentColor, scheme, newDensity);
  };

  const toggleTheme = () => {
    updateScheme(scheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        accentColor,
        setAccentColor: updateAccentColor,
        scheme,
        setScheme: updateScheme,
        density,
        setDensity: updateDensity,
        theme: scheme === "auto" ? "dark" : scheme,
        toggleTheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
