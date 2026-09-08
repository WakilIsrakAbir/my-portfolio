"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles, Send, FileDown } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/#home", sectionId: "home" },
    { label: "About", href: "/#about", sectionId: "about" },
    { label: "Skills", href: "/#skills", sectionId: "skills" },
    { label: "Projects", href: "/#projects", sectionId: "projects" },
    { label: "Experience", href: "/#experience", sectionId: "experience" },
    { label: "Contact", href: "/#contact", sectionId: "contact" }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          if (pathname === "/") {
            const scrollPosition = window.scrollY + 220;
            const sections = ["contact", "experience", "projects", "skills", "about", "home"];

            for (const id of sections) {
              const el = document.getElementById(id);
              if (el && el.offsetTop <= scrollPosition) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleResumeClick = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.2 }
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 bg-[#f2f7f4] dark:bg-[#09120e] border-b border-emerald-900/10 dark:border-emerald-500/15 ${
        scrolled
          ? "py-2.5 shadow-md shadow-emerald-950/5 dark:shadow-black/50"
          : "py-3 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 dark:text-white tracking-wide text-sm sm:text-base">
              ABIR<span className="text-teal-400">.</span>DEV
            </span>
            <span className="text-[9px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 -mt-1">
              Full-Stack MERN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full border border-emerald-600/20 dark:border-slate-800 bg-white dark:bg-[#0f2017] shadow-xs">
          {navItems.map((item) => {
            const isActive = pathname === "/" && activeSection === item.sectionId;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-teal-600 dark:text-teal-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-teal-500/10 dark:bg-teal-400/15 border border-teal-500/20 dark:border-teal-400/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={personalInfo.socials.gmail}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-hire-me-btn"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white btn-accent shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            title="Open Gmail Composer"
          >
            <Send className="w-3 h-3" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-emerald-900/15 dark:border-emerald-500/20 bg-[#f2f7f4] dark:bg-[#09120e] px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition ${
                    activeSection === item.sectionId && pathname === "/"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href="/Abir-Resume.pdf"
                  download="Wakil-Israk-Abir-Resume.pdf"
                  onClick={handleResumeClick}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <FileDown className="w-4 h-4 text-teal-500" />
                  <span>Download Resume</span>
                </a>
                <a
                  href={personalInfo.socials.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-accent text-sm font-semibold text-white shadow-sm transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Hire Me on Gmail</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
