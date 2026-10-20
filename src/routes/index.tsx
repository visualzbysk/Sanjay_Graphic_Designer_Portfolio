import { createFileRoute } from "@tanstack/react-router";
import { IntroSection, ThankYouSection } from "@/components/portfolio/ScriptScreens";
import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ToolsSection } from "@/components/portfolio/ToolsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjay Kumar — Graphic Designer Portfolio" },
      { name: "description", content: "Posters, thumbnails, branding, social media and print design by Sanjay Kumar, graphic designer in Chennai." },
      { property: "og:title", content: "Sanjay Kumar — Graphic Designer Portfolio" },
      { property: "og:description", content: "Bold visuals for brands, entertainment, and digital media." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip">
      <IntroSection />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ToolsSection />
      <ContactSection />
      <ThankYouSection />
    </main>
  );
}
