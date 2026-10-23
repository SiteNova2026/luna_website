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

const homeSections: readonly { id: string; component: ComponentType }[] = [
  { id: "hero", component: Hero },
  { id: "connected-system", component: ConnectedSystemSection },
  { id: "luna-system", component: LunaSystemSection },
  { id: "industries", component: IndustriesSection },
  { id: "solutions-showcase", component: SolutionsShowcase },
  { id: "why-choose", component: WhyChooseSection },
  { id: "full-service", component: FullServiceSection },
  { id: "proof-points", component: ProofPointsSection },
  { id: "contact", component: ContactSection },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white text-[#202a23]">
      <SiteHeader />
      {homeSections.map(({ id, component: Section }) => (
        <Section key={id} />
      ))}
      <SiteFooter />
    </main>
  );
} 