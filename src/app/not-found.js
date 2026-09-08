"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass, AlertTriangle, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-grid-pattern relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center p-8 sm:p-12 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative z-10"
      >
        {/* Animated Custom 404 SVG Illustration */}
        <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full text-blue-500"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Outer Orbit */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 6"
              className="text-blue-400/40"
            />
            {/* Inner Glow Circle */}
            <circle
              cx="100"
              cy="100"
              r="60"
              className="fill-blue-500/10 dark:fill-blue-500/20 stroke-blue-500/40"
              strokeWidth="2"
            />
            {/* Compass / Astrolabe Elements */}
            <line
              x1="100"
              y1="30"
              x2="100"
              y2="170"
              stroke="currentColor"
              strokeWidth="2"
              className="text-indigo-400/50"
            />
            <line
              x1="30"
              y1="100"
              x2="170"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-indigo-400/50"
            />
            <circle cx="100" cy="100" r="16" className="fill-purple-600 shadow-lg" />
            <circle cx="100" cy="100" r="6" fill="#ffffff" />
            {/* Floating Satellite */}
            <motion.circle
              cx="160"
              cy="70"
              r="8"
              className="fill-rose-500"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-6xl font-black gradient-text tracking-tighter select-none opacity-20">
              404
            </span>
          </div>
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          Error 404: Page Displaced
        </div>

        {/* Error Title */}
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
          Lost in Digital Space?
        </h1>

        {/* Error Message */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          The link or route you are looking for might have been removed, had its name changed, or is temporarily unavailable in Wakil Israk Abir's portfolio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            id="back-home-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/25 transition cursor-pointer text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition text-sm"
          >
            <Compass className="w-4 h-4 text-blue-500" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
