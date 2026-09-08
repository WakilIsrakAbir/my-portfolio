"use client";

import { motion } from "framer-motion";
import { Quote, Mail, Phone, Building2, UserCheck } from "lucide-react";
import { referencesData } from "@/data/portfolioData";
import { 
  sectionHeaderMotion, 
  bilateralSlide, 
  cardHover 
} from "@/utils/motion";

export default function ReferencesSection() {
  return (
    <section className="py-14 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Enters from Top with Luxury Blur */}
        <motion.div 
          variants={sectionHeaderMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <UserCheck className="w-3.5 h-3.5" />
            Verified Endorsements
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-950 dark:text-white tracking-tight">
            Academic & Professional <span className="gradient-text">References</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-900/90 dark:text-slate-300 max-w-xl mx-auto">
            Endorsed by faculty leaders and technical supervisors from Southeast University.
          </p>
        </motion.div>

        {/* References Grid: Bilateral Alternating Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {referencesData.map((ref, idx) => (
            <motion.div
              key={idx}
              variants={bilateralSlide(idx)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={cardHover}
              className="p-5 sm:p-6 rounded-3xl glass-card relative flex flex-col justify-between shadow-sm hover:shadow-xl border border-emerald-500/20 dark:border-slate-800 transition-colors"
            >
              <div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                >
                  <Quote className="w-7 h-7 text-emerald-500/50 mb-2.5" />
                </motion.div>
                <p className="text-xs sm:text-sm text-emerald-900 dark:text-slate-300 italic mb-5 leading-relaxed font-medium">
                  &ldquo;{ref.endorsement}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 border-t border-emerald-900/10 dark:border-slate-800">
                <h3 className="text-sm sm:text-base font-extrabold text-emerald-950 dark:text-white">
                  {ref.name}
                </h3>
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  {ref.title}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800/80 dark:text-slate-400 mt-1 mb-3">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{ref.organization}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1 text-emerald-800 dark:text-slate-300 hover:text-emerald-600 transition"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{ref.email}</span>
                  </a>
                  <span className="text-emerald-500/50">•</span>
                  <a
                    href={`tel:${ref.phone}`}
                    className="inline-flex items-center gap-1 text-emerald-800 dark:text-slate-300 hover:text-emerald-600 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{ref.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
