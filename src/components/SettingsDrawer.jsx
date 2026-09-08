"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, Moon, Sun, Zap, Check, Sliders, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    accentColor, 
    setAccentColor, 
    scheme, 
    setScheme, 
    mounted 
  } = useTheme();

  if (!mounted) return null;

  const themes = [
    { id: "green", label: "Emerald Pine", color: "#10b981", desc: "Mountain Forest" },
    { id: "teal", label: "Teal UMS", color: "#14b8a6", desc: "Campus Theme" },
    { id: "default", label: "Indigo", color: "#6366f1", desc: "Classic Blue" },
    { id: "brand", label: "Brand Sky", color: "#0284c7", desc: "Vibrant Cyan" },
    { id: "rose", label: "Rose", color: "#f43f5e", desc: "Coral Crimson" },
    { id: "purple", label: "Purple", color: "#9333ea", desc: "Royal Violet" },
    { id: "amber", label: "Amber", color: "#d97706", desc: "Warm Gold" },
  ];

  const schemes = [
    { id: "light", label: "Light Mode", desc: "Fresh Mountain Sage", icon: Sun },
    { id: "dark", label: "Dark Mode", desc: "Obsidian Tech Night", icon: Moon },
    { id: "auto", label: "Auto", desc: "System Preference", icon: Zap },
  ];

  return (
    <>
      {/* Floating Spinning Gear Button (SEU UMS Style) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Theme Settings"
          id="seu-settings-gear-btn"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-l-2xl shadow-xl shadow-emerald-900/30 hover:shadow-emerald-600/50 transition-all duration-300 cursor-pointer border-t border-b border-l border-white/25"
          title="Customize Theme & Colors"
        >
          <Settings className="w-5 h-5 sm:w-6 sm:h-6 animate-gear-spin transition-transform group-hover:scale-110" />
          <span className="sr-only">Settings</span>
        </button>
      </div>

      {/* Slide-over Settings Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-screen max-w-sm sm:max-w-md bg-[#08150f] text-slate-100 shadow-2xl border-l border-emerald-900/40 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="p-5 sm:p-6 bg-emerald-700 text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2.5">
                    <Settings className="w-5 h-5 animate-gear-spin" />
                    <div>
                      <h3 className="text-lg font-bold tracking-tight">Theme & Color Settings</h3>
                      <p className="text-[11px] text-emerald-100 font-medium">Personalize Wakil Israk Abir's Portfolio</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Settings"
                    className="p-1.5 rounded-lg hover:bg-emerald-800 text-emerald-100 hover:text-white transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">

                  {/* 1. Theme Scheme Selector */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Display Scheme Mode
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {schemes.map((s) => {
                        const Icon = s.icon;
                        const isSelected = scheme === s.id;
                        return (
                          <button
                            key={s.id}
                            onClick={() => setScheme(s.id)}
                            className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-left ${
                              isSelected
                                ? "border-emerald-400 bg-emerald-500/20 text-white shadow-sm ring-1 ring-emerald-400/40"
                                : "border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-1.5">
                                <Icon className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-slate-100">{s.label}</span>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                            </div>
                            <span className="text-[10px] text-slate-400 font-normal">{s.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Accent Color Palette */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                      Accent Colors
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {themes.map((t) => {
                        const isSelected = accentColor === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setAccentColor(t.id)}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "border-emerald-400 bg-emerald-500/20 text-white shadow-sm ring-1 ring-emerald-400/40"
                                : "border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                              style={{ backgroundColor: t.color }}
                            />
                            <div className="text-left">
                              <p className="leading-tight text-slate-200">{t.label}</p>
                              <p className="text-[9px] text-slate-400 font-normal">{t.desc}</p>
                            </div>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-emerald-400 ml-auto shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 text-center">
                  <p className="text-[11px] text-emerald-400 font-medium">
                    Wakil Israk Abir • SEU UMS Theme Engine
                  </p>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
