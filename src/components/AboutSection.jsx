"use client";

import { motion } from "framer-motion";
import { Target, Sparkles, ShieldCheck, Users2, Compass } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { 
  sectionHeaderMotion, 
  slideFromLeft, 
  staggerContainer, 
  scalePop, 
  cardHover 
} from "@/utils/motion";

export default function AboutSection() {
  const pillars = [
    {
      title: "Resilience",
      desc: "Tested under high-pressure real operations",
      icon: ShieldCheck,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Teamwork",
      desc: "IEEE Sub-Executive & Olympiad organizer",
      icon: Users2,
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-500/10",
    },
    {
      title: "Precision",
      desc: "Consistent top-tier academic record",
      icon: Compass,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Enters from Top with Luxury Blur */}
        <motion.div
          variants={sectionHeaderMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Journey
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-950 dark:text-white tracking-tight">
            About <span className="gradient-text">Wakil Israk Abir</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-900/90 dark:text-slate-300 max-w-xl mx-auto">
            A blend of rigorous computer science education, hands-on IT operations, and modern full-stack web engineering.
          </p>
        </motion.div>

        {/* Main Content: Enters from Left */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-card relative shadow-sm hover:shadow-xl transition-shadow duration-300 border border-emerald-500/20 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs"
              >
                <Target className="w-5 h-5" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-black text-emerald-950 dark:text-white">
                Career Objective & Drive
              </h3>
            </div>

            <motion.blockquote
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xs sm:text-sm md:text-base text-emerald-950 dark:text-emerald-100 italic border-l-4 border-emerald-500 pl-4 py-3 mb-6 leading-relaxed bg-emerald-500/10 dark:bg-emerald-500/15 rounded-r-2xl font-medium"
            >
              &ldquo;{personalInfo.objective}&rdquo;
            </motion.blockquote>

            <div className="space-y-3 text-xs sm:text-sm text-emerald-900 dark:text-slate-300 leading-relaxed">
              <p>
                As a recent graduate in Computer Science & Engineering from <strong className="text-emerald-950 dark:text-white font-black">Southeast University</strong> with a <strong className="text-emerald-950 dark:text-white font-black">CGPA of 3.59/4.00</strong>, I have cultivated a disciplined balance between conceptual algorithm design and high-velocity web development.
              </p>
              <p>
                My IT Operations internship at SEU exposed me to the realities of infrastructure reliability, campus networks, and fast-turnaround technical diagnostics. This foundation empowers me to write resilient, maintainable code rather than just aesthetic facades.
              </p>
            </div>

            {/* Core Pillars */}
            <motion.div
              variants={staggerContainer(0.09, 0.04)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-7 pt-6 border-t border-emerald-900/15 dark:border-slate-800"
            >
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={scalePop}
                    whileHover={cardHover}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-emerald-500/20 dark:border-slate-700/60 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all flex items-start gap-3"
                  >
                    <div className={`w-8 h-8 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-black uppercase tracking-wider ${pillar.color}`}>{pillar.title}</p>
                      <p className="text-[11px] text-emerald-900/80 dark:text-slate-400 mt-0.5 font-medium leading-tight">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
