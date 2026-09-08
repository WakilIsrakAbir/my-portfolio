"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Lock,
  CheckCircle2
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { 
  sectionHeaderMotion, 
  staggerContainer,
  buttonHover, 
  tapPress,
  appleEase 
} from "@/utils/motion";

function extractDomain(url) {
  if (!url) return "portfolio.internal/case-study";
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace("www.", "");
  } catch {
    return "production-app.live";
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: appleEase,
    },
  },
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { label: "All Projects", value: "All" },
    { label: "Full-Stack MERN", value: "Full-Stack MERN" },
    { label: "Enterprise Management", value: "Enterprise Management" },
    { label: "Healthcare", value: "Healthcare & Telemedicine" },
    { label: "Frontend UI/UX", value: "Frontend UI/UX" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getCategoryCount = (catValue) => {
    if (catValue === "All") return projectsData.length;
    return projectsData.filter((p) => p.category === catValue).length;
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Enters with Luxury Easing */}
        <motion.div
          variants={sectionHeaderMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Featured Engineering Portfolio ({projectsData.length} Live Projects)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 dark:text-white tracking-tight">
            Real-World <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-emerald-900/80 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered with complete production workflows, role-based dashboards, database architectures, and responsive interfaces.
          </p>

          {/* Interactive Filter Bar with Sliding Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-emerald-950/5 dark:bg-slate-900/80 border border-emerald-500/15 dark:border-slate-800 backdrop-blur-md max-w-fit mx-auto">
            {categories.map((cat) => {
              const count = getCategoryCount(cat.value);
              const isSelected = selectedCategory === cat.value;

              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer z-10 flex items-center gap-1.5 ${
                    isSelected
                      ? "text-white dark:text-emerald-950 font-black"
                      : "text-emerald-900 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectCategoryPill"
                      className="absolute inset-0 rounded-xl btn-accent shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? "bg-white/20 text-white dark:text-emerald-950"
                        : "bg-emerald-500/10 text-emerald-700 dark:text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Cards Grid with Staggered Cascading Reveal */}
        <motion.div 
          variants={staggerContainer(0.09, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const domain = extractDomain(project.liveUrl);

              return (
                <motion.article
                  key={project.id}
                  layout
                  variants={cardVariant}
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.22, ease: appleEase } }}
                  whileHover={{ y: -6 }}
                  onMouseMove={handleMouseMove}
                  className="group relative rounded-3xl glass-card overflow-hidden border border-emerald-500/20 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Interactive Dynamic Mouse Spotlight Radial Glow */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    style={{
                      background:
                        "radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.12), transparent 60%)",
                    }}
                  />

                  <div>
                    {/* Modern Browser Chrome Window Top Bar */}
                    <div className="px-3.5 sm:px-4 py-2 bg-slate-100/90 dark:bg-slate-950/90 border-b border-emerald-500/15 dark:border-slate-800 flex items-center justify-between gap-2.5 select-none">
                      {/* Project Type Badge */}
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 shrink-0">
                        {project.badge}
                      </span>

                      {/* Centered Glass URL Bar with Domain Display */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-emerald-500/10 dark:border-slate-800 text-[10px] font-mono text-emerald-900/70 dark:text-slate-400 max-w-[170px] sm:max-w-[210px] truncate">
                        <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        <span className="truncate">https://{domain}</span>
                      </div>

                      {/* Live Status Indicator */}
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="hidden sm:inline">LIVE</span>
                      </div>
                    </div>

                    {/* Card Media: High-Quality Showcase with Soft Vignette */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-emerald-500/15 dark:border-slate-800/80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Soft Vignette Mask */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                      <div className="absolute top-3.5 right-3.5">
                        <span className="px-3 py-1 rounded-xl text-[10px] font-bold backdrop-blur-md bg-slate-950/70 text-white/90 border border-white/10 shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Quick Action Overlay on Hover: Only Live App */}
                      {project.liveUrl && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-black text-xs shadow-xl hover:scale-105 transition-transform"
                          >
                            <span>Launch Live App</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 sm:p-7">
                      {/* Project Index & Title */}
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[11px] font-mono font-black text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          PROJECT // 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-900/50 dark:text-slate-400">
                          {project.technologies.length} Tech Modules
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-emerald-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Concise Summary */}
                      <p className="text-xs sm:text-sm text-emerald-900/80 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Architectural Highlights Bullet Box */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mt-4.5 space-y-2 p-3.5 rounded-2xl bg-emerald-950/5 dark:bg-slate-900/60 border border-emerald-500/15 dark:border-slate-800/80">
                          <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                            <Layers className="w-3 h-3" />
                            <span>System Highlights</span>
                          </div>
                          {project.highlights.slice(0, 2).map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-emerald-900/85 dark:text-slate-300 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Badges with Micro-Hover */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-50/80 dark:bg-slate-800/80 text-emerald-900 dark:text-slate-200 border border-emerald-500/20 dark:border-slate-700/80 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-emerald-900/10 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Architecture & Case Study</span>
                    </button>

                    <div>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white btn-accent shadow-xs hover:-translate-y-0.5 hover:shadow-md transition"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 dark:text-slate-200 bg-emerald-500/10 dark:bg-slate-800 border border-emerald-500/25 dark:border-slate-700 shadow-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                          <span>Live Link Soon</span>
                        </span>
                      )}
                    </div>
                  </div>

                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window for full breakdown */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}



