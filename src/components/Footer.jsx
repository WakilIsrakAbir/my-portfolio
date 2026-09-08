"use client";

import Link from "next/link";
import { ArrowUp, Code2, Heart, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-emerald-600/20 bg-white/60 dark:bg-[#06180f]/80 backdrop-blur-md pt-10 pb-7 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-7 border-b border-emerald-600/15 dark:border-emerald-900/40">
          {/* Brand & Mission */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-emerald-950 dark:text-white mb-3"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-emerald-950 dark:text-white tracking-wide text-sm sm:text-base">
                  {personalInfo.name.toUpperCase()}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400 -mt-0.5">
                  Full-Stack MERN Engineer
                </span>
              </div>
            </Link>

            <p className="text-xs text-emerald-900/80 dark:text-slate-400 leading-relaxed max-w-sm mb-4">
              Empowering organizations with full-cycle web applications,
              real-time architectures, and rock-solid IT operations.
            </p>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Full-time Roles & Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/#home"
                  className="text-emerald-900/80 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
                >
                  Home Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-emerald-900/80 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
                >
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-emerald-900/80 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
                >
                  Skills & Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-emerald-900/80 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-emerald-900/80 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
                >
                  Experience & Education
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-emerald-900/80 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
                >
                  Contact Wakil
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-3">
                Let's Stay Connected
              </h4>
              <p className="text-xs text-emerald-900/80 dark:text-slate-400 mb-3">
                Reach out for software development roles, project consultations,
                or technical collaborations.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-emerald-600/20 dark:border-slate-800 bg-white dark:bg-slate-900 text-emerald-900 dark:text-slate-200 hover:text-emerald-600 hover:border-emerald-500 transition shadow-xs"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-emerald-600/20 dark:border-slate-800 bg-white dark:bg-slate-900 text-emerald-900 dark:text-slate-200 hover:text-emerald-600 hover:border-emerald-500 transition shadow-xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-xl border border-emerald-600/20 dark:border-slate-800 bg-white dark:bg-slate-900 text-emerald-900 dark:text-slate-200 hover:text-emerald-600 hover:border-emerald-500 transition shadow-xs"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2 rounded-xl border border-emerald-600/20 dark:border-slate-800 bg-white dark:bg-slate-900 text-emerald-900 dark:text-slate-200 hover:text-emerald-600 hover:border-emerald-500 transition shadow-xs"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-6 pt-3 flex items-center justify-end">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-emerald-600/20 dark:border-slate-800 bg-white dark:bg-slate-900 text-emerald-900 dark:text-slate-300 hover:text-emerald-600 hover:border-emerald-500 transition cursor-pointer shadow-xs"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-800/80 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Wakil Israk Abir. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS, Framer Motion & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}
