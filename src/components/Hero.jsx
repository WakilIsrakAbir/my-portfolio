"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import Swal from "sweetalert2";
import { 
  appleEase, 
  staggerContainer, 
  slideFromLeft, 
  slideFromRight, 
  scalePop, 
  buttonHover, 
  tapPress 
} from "@/utils/motion";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Full-Stack MERN Developer",
    "Computer Science Engineer",
    "React & Next.js Specialist",
    "Node.js & MongoDB Architect",
    "Problem Solver & Tech Leader",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const triggerResumeConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    Swal.fire({
      icon: "success",
      title: "Resume Ready!",
      text: "Wakil Israk Abir's official PDF resume is now downloading. Feel free to review my qualifications!",
      timer: 3500,
      timerProgressBar: true,
      showConfirmButton: false,
      background: "var(--bg-card)",
      color: "var(--text-primary)",
    });
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-gradient-to-tr from-teal-500/15 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content: Orchestrated Stagger Cascade */}
          <motion.div
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <motion.div 
              variants={slideFromLeft}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold tracking-wide mb-4 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for Full-time Roles & Projects
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1 
              variants={slideFromLeft}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-3 text-emerald-950 dark:text-white"
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Rotating Role Badge */}
            <motion.div 
              variants={slideFromLeft}
              className="h-9 sm:h-10 flex items-center mb-4"
            >
              <span className="text-base sm:text-lg font-bold text-emerald-900/80 dark:text-slate-300 mr-2">
                I am a
              </span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-base sm:text-lg font-extrabold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </motion.div>

            {/* Bio Brief */}
            <motion.p 
              variants={slideFromLeft}
              className="text-sm sm:text-base text-emerald-900 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl"
            >
              Computer Science & Engineering graduate from{" "}
              <strong className="text-emerald-950 dark:text-white">
                Southeast University
              </strong>
              . <br /> Passionate MERN engineer specializing in scalable web
              systems, clean <br /> modular architectures, interactive
              interfaces, and enterprise management platforms.
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div 
              variants={slideFromLeft}
              className="flex flex-wrap items-center gap-3.5 text-xs font-semibold text-emerald-800 dark:text-slate-400 mb-6"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {personalInfo.location}
              </span>
              <span className="hidden sm:inline text-emerald-400 dark:text-slate-700">
                •
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-teal-400" />
                B.Sc. in CSE (2022 - 2026)
              </span>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div 
              variants={slideFromLeft}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-7"
            >
              <Link
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white btn-accent shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-xs sm:text-sm cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="/Abir-Resume.pdf"
                download="Wakil-Israk-Abir-Resume.pdf"
                onClick={triggerResumeConfetti}
                style={{
                  borderColor: "var(--accent-primary)",
                  color: "var(--accent-primary)",
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-extrabold border-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-xs sm:text-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Connectivity Links */}
            <motion.div 
              variants={slideFromLeft}
              className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect With Me:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-500 transition"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-500 transition"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={
                    personalInfo.socials.instagram ||
                    "https://www.instagram.com/wakil_israk_abir/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-pink-500 transition"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={
                    personalInfo.socials.gmail || `mailto:${personalInfo.email}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-500 transition"
                  aria-label="Email Wakil on Gmail"
                  title="Send Email via Gmail"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-500 transition"
                  aria-label="Call Wakil"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual / Wakil's Photo Card: Enters from Right */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Glowing Backdrop Circle */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-88">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 via-blue-500 to-purple-500 blur-2xl opacity-35 dark:opacity-40 pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative w-full h-full rounded-3xl p-1.5 bg-gradient-to-b from-white/30 to-white/10 dark:from-slate-700/50 dark:to-slate-900/50 backdrop-blur-xl border border-white/40 dark:border-slate-700 shadow-xl overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={personalInfo.heroImage}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 340px"
                    style={{ objectPosition: "50% 62%" }}
                    className="object-cover scale-[1.42] filter contrast-[1.04] brightness-[1.02] group-hover:scale-[1.46] transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />

                  {/* Bottom Name Card on Photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-center">
                    <p className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">
                      Southeast University
                    </p>
                    <p className="text-xs font-extrabold text-white">
                      B.Sc. in Computer Science & Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: MERN Stack */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -left-3 sm:-left-5 px-3 py-1.5 rounded-xl glass-card border border-white/40 dark:border-slate-700/80 shadow-lg flex items-center gap-2 z-20"
              >
                <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-slate-400">
                    Core Expertise
                  </p>
                  <p className="text-[11px] font-bold text-slate-900 dark:text-white">
                    MERN & Next.js
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
