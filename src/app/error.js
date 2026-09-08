"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertOctagon, Terminal } from "lucide-react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("Runtime Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-grid-pattern relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl w-full text-center p-8 sm:p-12 rounded-3xl glass-card border border-rose-500/30 dark:border-rose-500/20 shadow-2xl relative z-10"
      >
        {/* Custom SVG Error Illustration */}
        <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 160 160"
            className="w-full h-full text-rose-500"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <polygon
              points="80,20 145,135 15,135"
              fill="rgba(244, 63, 94, 0.1)"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Exclamation Mark */}
            <line
              x1="80"
              y1="60"
              x2="80"
              y2="95"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="80" cy="115" r="4" fill="currentColor" />
          </motion.svg>
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-4">
          <AlertOctagon className="w-3.5 h-3.5" />
          System Exception Encountered
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
          Something went off-script
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          An unexpected glitch happened while rendering this page. Our error boundary has recorded the event.
        </p>

        {error?.message && (
          <div className="mb-6 p-3 rounded-xl bg-slate-900/90 text-rose-300 font-mono text-xs text-left overflow-x-auto border border-rose-500/20">
            <span className="text-slate-500">$ error:</span> {error.message}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-md shadow-rose-500/25 transition cursor-pointer text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
