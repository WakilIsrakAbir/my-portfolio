"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Server,
  Users,
  Trophy,
  Award,
  BookOpen,
  Sparkles,
  Building2,
  Check
} from "lucide-react";
import { experienceData, educationData } from "@/data/portfolioData";
import { 
  sectionHeaderMotion, 
  slideFromLeft, 
  slideFromRight, 
  cardHover,
  appleEase
} from "@/utils/motion";

export default function ExperienceTimeline() {
  const getExperienceIcon = (iconName) => {
    switch (iconName) {
      case "Server":
        return Server;
      case "Users":
        return Users;
      case "Trophy":
        return Trophy;
      default:
        return Briefcase;
    }
  };

  const getEducationIcon = (iconName) => {
    switch (iconName) {
      case "GraduationCap":
        return GraduationCap;
      case "Award":
        return Award;
      case "BookOpen":
        return BookOpen;
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading: Enters from Top with Luxury Blur */}
        <motion.div 
          variants={sectionHeaderMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            Career & Academic Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-950 dark:text-white tracking-tight">
            Professional & <span className="gradient-text">Academic Milestones</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-900/90 dark:text-slate-300 max-w-xl mx-auto">
            Practical IT operations, competitive student community leadership, and structured computer science education.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-20 max-w-5xl mx-auto">

          {/* ========================================================
              BLOCK 1: PROFESSIONAL & LEADERSHIP EXPERIENCE (Top)
             ======================================================== */}
          <div>
            {/* Sub-Header Banner */}
            <motion.div 
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-8 border-b border-emerald-500/20 dark:border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs border border-emerald-500/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-emerald-950 dark:text-white">
                    Professional & Leadership
                  </h3>
                  <p className="text-xs text-emerald-900/80 dark:text-slate-400 mt-0.5">
                    Real-world IT system operations, university leadership & national volunteering
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 shrink-0">
                {experienceData.length} Milestones
              </span>
            </motion.div>

            {/* Timeline Flow */}
            <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-teal-500 before:to-emerald-500/20">
              {experienceData.map((item, idx) => {
                const IconComponent = getExperienceIcon(item.iconName);

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.65, delay: idx * 0.1, ease: appleEase }}
                    className="relative group"
                  >
                    {/* Glowing Node on Timeline Line with Spring Pop */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + 0.1, type: "spring", stiffness: 400, damping: 20 }}
                      className="absolute -left-[31px] sm:-left-[35px] top-4 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-md group-hover:scale-125 group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 group-hover:bg-white transition-colors" />
                    </motion.div>

                    {/* Timeline Card */}
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className="p-5 sm:p-7 rounded-3xl glass-card relative overflow-hidden shadow-sm hover:shadow-xl border border-emerald-500/15 dark:border-slate-800 transition-colors"
                    >
                      
                      {/* Top Row: Dates, Location, & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800 dark:text-slate-400">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-slate-800/80 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                            <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/60 dark:bg-slate-800/50 text-emerald-900/80 dark:text-slate-300 border border-black/5 dark:border-white/5">
                            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            {item.location}
                          </span>
                        </div>

                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          {item.type}
                        </span>
                      </div>

                      {/* Main Title & Organization */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/25 shadow-xs">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-black text-emerald-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {item.role}
                          </h4>
                          <p className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-teal-400 flex items-center gap-1.5 mt-0.5">
                            <Building2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-xs sm:text-sm text-emerald-900/90 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Impact Checklist */}
                      <div className="space-y-2 mb-5">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900/80 dark:text-slate-300">
                            <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Domain Skill Pills */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="pt-3.5 border-t border-emerald-500/10 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800/70 dark:text-slate-400 mr-1">
                            Skills & Domains:
                          </span>
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              BLOCK 2: EDUCATION JOURNEY (Bottom)
             ======================================================== */}
          <div>
            {/* Sub-Header Banner */}
            <motion.div 
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-8 border-b border-teal-500/20 dark:border-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 shadow-xs border border-teal-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-emerald-950 dark:text-white">
                    Education Journey
                  </h3>
                  <p className="text-xs text-emerald-900/80 dark:text-slate-400 mt-0.5">
                    Formal Computer Science & Engineering degree and preparatory academic achievements
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/25 shrink-0">
                3 Degrees & Diplomas
              </span>
            </motion.div>

            {/* Education Milestone Cards (Stacked Wide Roadmap) */}
            <div className="space-y-4 sm:space-y-5">
              {educationData.map((edu, idx) => {
                const EduIcon = getEducationIcon(edu.iconName);
                const isPrimary = idx === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.65, delay: idx * 0.1, ease: appleEase }}
                    className={`p-5 sm:p-7 rounded-3xl glass-card relative overflow-hidden transition-colors shadow-sm hover:shadow-xl border ${
                      isPrimary
                        ? "border-emerald-500/40 ring-1 ring-emerald-500/20"
                        : "border-emerald-500/15 dark:border-slate-800"
                    }`}
                  >
                    {/* Ambient Glow for Primary Degree */}
                    {isPrimary && (
                      <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                    )}

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                      
                      {/* Left Side: Icon, Degree, Institution, Location */}
                      <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-xs transition-transform duration-300 ${
                            isPrimary
                              ? "bg-gradient-to-br from-emerald-500/25 to-teal-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30"
                              : "bg-teal-500/15 text-teal-600 dark:text-teal-300 border-teal-500/20"
                          }`}
                        >
                          <EduIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-emerald-500/10 dark:bg-slate-800/80 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                              <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-teal-400 shrink-0" />
                              {edu.period}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-800/80 dark:text-slate-400">
                              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                              {edu.location}
                            </span>
                          </div>

                          <h4 className="text-base sm:text-lg lg:text-xl font-black text-emerald-950 dark:text-white tracking-tight">
                            {edu.degree}
                          </h4>

                          <p className="text-xs sm:text-sm font-extrabold text-emerald-700 dark:text-teal-400 mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      {/* Right Side: Prominent Score Badge */}
                      <div className="lg:text-right shrink-0 lg:self-center">
                        <div className="inline-flex flex-col lg:items-end p-3 sm:p-3.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/25">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700/80 dark:text-emerald-400">
                            Academic Score
                          </span>
                          <span className="text-base sm:text-lg font-black text-emerald-950 dark:text-white">
                            {edu.result}
                          </span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
