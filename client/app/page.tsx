import Hero from "./components/home/Hero";
import ConnectedSystemSection from "./components/home/ConnectedSystemSection";
import IndustriesSection from "./components/home/IndustriesSection";
import { SiteHeader } from "./layout/site-header";
import { LunaSystemSection } from "./components/home/SolutionDiagram/LunaSystemSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#202a23]">
      <SiteHeader />
      <Hero/>
      <ConnectedSystemSection />
       <LunaSystemSection />
      <IndustriesSection />
    </main>
  );
} 