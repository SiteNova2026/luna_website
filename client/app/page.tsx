import type { ComponentType } from "react";
import { SiteHeader } from "./layout/site-header";
import {
  ConnectedSystemSection,
  ContactSection,
  FullServiceSection,
  Hero,
  IndustriesSection,
  LunaSystemSection,
  ProofPointsSection,
  SiteFooter,
  SolutionsShowcase,
  WhyChooseSection,
} from "./components/home";

/**
 * Declarative section order for the landing page.
 * Add, remove, or reorder sections here without touching JSX.
 */
const homeSections: readonly ComponentType[] = [
  Hero,
  ConnectedSystemSection,
  LunaSystemSection,
  IndustriesSection,
  SolutionsShowcase,
  WhyChooseSection,
  FullServiceSection,
  ProofPointsSection,
  ContactSection,
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white text-[#202a23]">
      <SiteHeader />
      {homeSections.map((Section) => (
        <Section key={Section.name} />
      ))}
      <SiteFooter />
    </main>
  );
} 