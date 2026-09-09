"use client";

import { useState, useEffect } from "react";
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  Tooltip
} from "recharts";
import { 
  Cpu, 
  Sparkles, 
  BarChart3, 
  LayoutGrid, 
  Monitor, 
  Server, 
  Database, 
  Wrench,
  Code2,
  Palette,
  Briefcase
} from "lucide-react";
import { skillsData } from "@/data/portfolioData";
import { TechIcon } from "./TechIcons";

export default function SkillsVisualizer() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeView, setActiveView] = useState("cards"); // "cards" or "analytics"
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categoryMeta = {
    languages: {
      icon: Code2,
      title: "Programming Languages",
      subtitle: "Core algorithmic thinking, syntax mastery, data structures, and computational problem solving",
      tag: "Core Syntax & Foundations",
      badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
      unit: "Languages"
    },
    frontend: {
      icon: Monitor,
      title: "Frontend Engineering",
      subtitle: "Reactive client architectures, state pipelines, fluid transitions & mobile-first responsive interfaces",
      tag: "Client-Side UI & Interactive UX",
      badgeColor: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
      unit: "Technologies"
    },
    ui_design: {
      icon: Palette,
      title: "UI Frameworks & Design",
      subtitle: "Modern CSS utility frameworks, component systems, fluid motion & design tools",
      tag: "Styling & Component Libraries",
      badgeColor: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20",
      unit: "Technologies"
    },
    backend: {
      icon: Server,
      title: "Backend & APIs",
      subtitle: "Event-driven asynchronous services, REST micro-architectures, middleware pipelines & secure authentication",
      tag: "Server Systems & Core Logic",
      badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
      unit: "Technologies"
    },
    database: {
      icon: Database,
      title: "Databases & Storage",
      subtitle: "Document schema modeling, NoSQL aggregations, relational normalization, indexing & query optimization",
      tag: "Data Architecture & Persistence",
      badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      unit: "Databases"
    },
    tools: {
      icon: Wrench,
      title: "Developer Tools & Environment",
      subtitle: "Collaborative version control, modern IDE diagnostics, endpoint testing suites & workspace customization",
      tag: "Productivity & Debugging Suite",
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      unit: "Tools"
    },
    productivity: {
      icon: Briefcase,
      title: "Office & Productivity",
      subtitle: "Enterprise spreadsheet modeling, technical documentation, automated routing & presentation decks",
      tag: "Office Automation & Documentation",
      badgeColor: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
      unit: "Applications"
    }
  };

  const categoriesToRender = skillsData.categories.filter((cat) => {
    if (activeCategory !== "all" && cat.id !== activeCategory) return false;
    return true;
  });

  return (
    <section id="skills" className="py-14 sm:py-16 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-teal-500/10 dark:bg-teal-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Clean and Instant */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Cpu className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-950 dark:text-white tracking-tight">
            Technical Arsenal & <span className="gradient-text">Engineering Mastery</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-900/90 dark:text-slate-300 max-w-xl mx-auto">
            Categorized across dedicated engineering domains: Languages, Frontend, UI & Design, Backend, Databases, Tools, and Office Suites.
          </p>
        </div>

        {/* Top Control Bar: Category Jump & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 mb-8 p-3 rounded-2xl glass-card shadow-xs">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "btn-accent shadow-xs scale-105"
                  : "bg-white dark:bg-slate-900 text-emerald-950 dark:text-emerald-100 border border-emerald-500/20 dark:border-slate-700/80 hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-500/40"
              }`}
            >
              All Domains ({skillsData.categories.length})
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "btn-accent shadow-xs scale-105"
                    : "bg-white dark:bg-slate-900 text-emerald-950 dark:text-emerald-100 border border-emerald-500/20 dark:border-slate-700/80 hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-500/40"
                }`}
              >
                {cat.name} ({cat.skills.length})
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              onClick={() => setActiveView("cards")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeView === "cards"
                  ? "btn-accent shadow-xs"
                  : "bg-white dark:bg-slate-900 text-emerald-950 dark:text-emerald-100 border border-emerald-500/20 dark:border-slate-700/80 hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-300"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Divided Blocks</span>
            </button>
            <button
              onClick={() => setActiveView("analytics")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeView === "analytics"
                  ? "btn-accent shadow-xs"
                  : "bg-white dark:bg-slate-900 text-emerald-950 dark:text-emerald-100 border border-emerald-500/20 dark:border-slate-700/80 hover:bg-emerald-500/15 dark:hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-300"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Competency Radar</span>
            </button>
          </div>
        </div>

        {/* Content View: Divided Category Sections vs Radar */}
        {activeView === "cards" ? (
          <div className="space-y-12 sm:space-y-14">
            {categoriesToRender.map((category) => {
              const meta = categoryMeta[category.id] || categoryMeta.frontend;
              const Icon = meta.icon;
              const skills = category.skills;

              return (
                <div
                  key={category.id}
                  className="space-y-4"
                >
                  {/* Category Section Header Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-emerald-600/20 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-black text-emerald-950 dark:text-white">
                            {meta.title}
                          </h3>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${meta.badgeColor}`}>
                            {skills.length} {meta.unit || "Technologies"}
                          </span>
                        </div>
                        <p className="text-xs text-emerald-900/80 dark:text-slate-400 mt-0.5">
                          {meta.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="hidden lg:inline-block text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                      {meta.tag}
                    </span>
                  </div>

                  {/* Category Grid of Interactive Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-4 sm:p-5 rounded-2xl glass-card group relative overflow-hidden flex flex-col shadow-xs hover:border-emerald-500/40 hover:shadow-lg transition-all duration-200"
                        >
                          {/* Ambient Glow */}
                          <div
                            className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none"
                            style={{ backgroundColor: skill.color }}
                          />

                          {/* Card Top: Brand Logo & Title */}
                          <div className="flex items-center gap-3 mb-3 min-w-0">
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-black/5 dark:border-white/10 shadow-xs group-hover:scale-105 transition-transform"
                              style={{ backgroundColor: skill.bgColor }}
                            >
                              <TechIcon name={skill.key} className="w-6 h-6" />
                            </div>
                            <h4 className="text-sm sm:text-base font-black text-emerald-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                              {skill.name}
                            </h4>
                          </div>

                          {/* Detailed Description */}
                          <p className="text-xs text-emerald-900/90 dark:text-slate-300 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Competency Radar View */
          <div className="p-6 sm:p-8 rounded-3xl glass-card max-w-4xl mx-auto shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-emerald-950 dark:text-white flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Comprehensive Full-Stack Skill Matrix
              </h3>
              <p className="text-xs text-emerald-800/80 dark:text-slate-400 mt-1">
                Multi-axial evaluation across frontend, backend, databases, and problem solving.
              </p>
            </div>

            <div className="h-[340px] sm:h-[400px] w-full">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillsData.chartMetrics}>
                    <PolarGrid stroke="rgba(16, 185, 129, 0.25)" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: "currentColor", fontSize: 11, fontWeight: 700 }} 
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(16, 185, 129, 0.2)" />
                    <Radar
                      name="Proficiency"
                      dataKey="proficiency"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.35}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-color)",
                        borderRadius: "0.75rem",
                        color: "var(--text-primary)",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
