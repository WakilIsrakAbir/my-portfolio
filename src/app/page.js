import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import SkillsVisualizer from "@/components/SkillsVisualizer";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <StatsSection />
      <AboutSection />
      <SkillsVisualizer />
      <ProjectsSection />
      <ExperienceTimeline />
      <ReferencesSection />
      <ContactSection />
    </div>
  );
}
