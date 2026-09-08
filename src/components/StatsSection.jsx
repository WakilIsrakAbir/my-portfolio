"use client";

import { personalInfo } from "@/data/portfolioData";
import { FolderGit2, Code2, Users, GraduationCap } from "lucide-react";

export default function StatsSection() {
  const icons = [FolderGit2, Code2, Users, GraduationCap];

  return (
    <section className="py-8 sm:py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
          {personalInfo.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl glass-card text-center relative group overflow-hidden border border-emerald-500/20 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* Floating ambient glow on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mx-auto mb-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-emerald-800/80 dark:text-slate-400 font-semibold">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

