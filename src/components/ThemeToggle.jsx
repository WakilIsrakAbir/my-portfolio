"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const { scheme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-slate-700/40 flex items-center justify-center opacity-0 ${className}`}>
        <div className="w-4 h-4" />
      </div>
    );
  }

  const isDark = scheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Toggle theme (Current: ${scheme})`}
      id="theme-toggle-btn"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative p-2 rounded-xl border border-emerald-600/30 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 hover:bg-emerald-50 dark:hover:bg-slate-800 text-emerald-800 dark:text-emerald-300 shadow-xs hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-emerald-800" />
      )}
    </button>
  );
}
