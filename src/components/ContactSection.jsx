"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  Clock,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { LinkedinIcon, InstagramIcon } from "./SocialIcons";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { 
  sectionHeaderMotion, 
  slideFromLeft, 
  slideFromRight, 
  staggerContainer, 
  cardHover, 
  buttonHover, 
  tapPress 
} from "@/utils/motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `${type === "email" ? "Email address" : "Phone number"} copied!`,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: "var(--bg-card)",
      color: "var(--text-primary)",
    });

    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        title: "Please fill in Name, Email and Message",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "var(--bg-card)",
        color: "var(--text-primary)",
      });
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ux816ag";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_astpctp";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "9R2H4sK7nLCfnZgE1";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          from_name: formData.name.trim(),
          email: formData.email.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          subject: formData.subject?.trim() || "Portfolio Direct Message",
          message: formData.message.trim(),
        },
        publicKey
      );

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        background: "var(--bg-card)",
        color: "var(--text-primary)",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: error?.text || error?.message || "Failed to send message. Please try again.",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        background: "var(--bg-card)",
        color: "var(--text-primary)",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-16 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Enters from Top with Luxury Blur */}
        <motion.div 
          variants={sectionHeaderMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <MessageSquare className="w-3.5 h-3.5" />
            Let&apos;s Collaborate
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-950 dark:text-white tracking-tight">
            Get in Touch with <span className="gradient-text">Abir</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-900/90 dark:text-slate-300 max-w-xl mx-auto">
            Have a project in mind, an engineering role, or a technical inquiry?
            Reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info & Quick Copy Cards: Orchestrated Stagger */}
          <motion.div 
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Direct Email Card */}
            <motion.div 
              variants={slideFromLeft}
              whileHover={cardHover}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-emerald-500/20 dark:border-slate-800 shadow-xs hover:shadow-lg transition-colors flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-slate-400">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-black text-emerald-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition break-all"
                  >
                    {personalInfo.email}
                  </a>
                  <p className="text-[11px] text-emerald-800/80 dark:text-slate-400 mt-0.5">
                    Typical response time: within 12 hours
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                className="p-2 rounded-xl border border-emerald-600/20 dark:border-slate-700 bg-emerald-50/50 dark:bg-slate-800 text-emerald-900 dark:text-slate-300 hover:bg-emerald-100 transition"
                title="Copy Email Address"
              >
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </motion.div>

            {/* Direct Phone Card */}
            <motion.div 
              variants={slideFromLeft}
              whileHover={cardHover}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-emerald-500/20 dark:border-slate-800 shadow-xs hover:shadow-lg transition-colors flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-slate-400">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-black text-emerald-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                  >
                    {personalInfo.phone}
                  </a>
                  <p className="text-[11px] text-emerald-800/80 dark:text-slate-400 mt-0.5">
                    Available for calls & WhatsApp chats
                  </p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                className="p-2 rounded-xl border border-emerald-600/20 dark:border-slate-700 bg-emerald-50/50 dark:bg-slate-800 text-emerald-900 dark:text-slate-300 hover:bg-emerald-100 transition"
                title="Copy Phone Number"
              >
                {copiedType === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </motion.div>

            {/* Social Media Profiles Card */}
            <motion.div 
              variants={slideFromLeft}
              whileHover={cardHover}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-emerald-500/20 dark:border-slate-800 shadow-xs hover:shadow-lg transition-colors flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-500 flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-slate-400">
                  Social & Professional Profiles
                </h4>
                <p className="text-[11px] text-emerald-800/80 dark:text-slate-400 mt-0.5 mb-2.5">
                  Connect directly on LinkedIn & Instagram
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-500/25 text-xs font-bold transition-all hover:-translate-y-0.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.instagram || "https://www.instagram.com/wakil_israk_abir/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-pink-700 dark:text-pink-400 border border-pink-500/25 text-xs font-bold transition-all hover:-translate-y-0.5"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              variants={slideFromLeft}
              whileHover={cardHover}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-emerald-500/20 dark:border-slate-800 shadow-xs hover:shadow-lg transition-colors flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-500 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-slate-400">
                  Current Residence
                </h4>
                <p className="text-xs sm:text-sm font-black text-emerald-950 dark:text-white">
                  {personalInfo.location}
                </p>
                <p className="text-[11px] text-emerald-800/80 dark:text-slate-400 mt-0.5">
                  Open to on-site, hybrid & remote roles
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Contact Form: Enters from Right */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7 p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-emerald-500/20 dark:border-slate-800 shadow-xs"
          >
            <h3 className="text-lg font-bold text-emerald-950 dark:text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-emerald-800/80 dark:text-slate-400 mb-5">
              Fill out this form and I will receive your notification right
              away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-600/30 dark:border-slate-700 bg-white dark:bg-slate-950 text-emerald-950 dark:text-white placeholder:text-emerald-800/50 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm transition shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-600/30 dark:border-slate-700 bg-white dark:bg-slate-950 text-emerald-950 dark:text-white placeholder:text-emerald-800/50 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm transition shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full-Stack Developer Job Opportunity"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-600/30 dark:border-slate-700 bg-white dark:bg-slate-950 text-emerald-950 dark:text-white placeholder:text-emerald-800/50 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm transition shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-600/30 dark:border-slate-700 bg-white dark:bg-slate-950 text-emerald-950 dark:text-white placeholder:text-emerald-800/50 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-xs sm:text-sm transition resize-none shadow-xs"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={buttonHover}
                whileTap={tapPress}
                className="w-full py-3 rounded-xl font-bold text-white btn-accent shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-xs sm:text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Dispatching Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
