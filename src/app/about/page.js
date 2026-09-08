import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ReferencesSection from "@/components/ReferencesSection";

export const metadata = {
  title: "About & Journey | Wakil Israk Abir - Full-Stack MERN Developer",
  description: "Learn more about Wakil Israk Abir's background, education at Southeast University, IT operations experience, and academic endorsements.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <ExperienceTimeline />
      <ReferencesSection />
    </div>
  );
}
