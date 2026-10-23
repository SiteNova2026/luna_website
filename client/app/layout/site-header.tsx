"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Industry Solutions", url: "#industry-solutions" },
  { name: "Services", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Our Project", url: "/" }
];

function BrandLink() {
  return (
    <a href="/" aria-label="Luna home">
      <img src="/images/logo.png" alt="" width={161} height={74} className="wordmark" />
    </a>
  );
}

function NavigationLink({ label, url, active, onClick }: { label: string; url: string; active: boolean; onClick: () => void }) {
  return (
    <a className={`${active ? "activeNav" : "navLink"} fs-11px`} href={url} onClick={onClick}>
      {label}
    </a>
  );
}

function MainNavigation({
  activeItem,
  onNavigate,
}: {
  activeItem: string;
  onNavigate: (item: string) => void;
}) {
  return (
    <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
      <NavigationLink label="Home" url="/" active={activeItem === "Home"} onClick={() => onNavigate("Home")} />
      {navigationItems.map((item) => (
        <NavigationLink key={item.name} label={item.name} url={item.url} active={activeItem === item.name} onClick={() => onNavigate(item.name)} />
      ))}
      <a className="headerCta btn btn-primary btn-compact fs-11px" href="#contact">
        Talk To Us <span aria-hidden="true">→</span>
      </a>
    </nav>
  );
}

function MobileNavigation({
  activeItem,
  isOpen,
  onClose,
  onNavigate,
}: {
  activeItem: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (item: string) => void;
}) {
  const handleNavigate = (item: string) => {
    onNavigate(item);
    onClose();
  };

  return (
    <nav
      id="mobile-navigation"
      className={`mobileNavigation grid gap-1 md:hidden ${isOpen ? "" : "hidden"}`}
      aria-label="Mobile navigation"
    >
      <NavigationLink label="Home" url="/" active={activeItem === "Home"} onClick={() => handleNavigate("Home")} />
      {navigationItems.map((item) => (
        <NavigationLink
          key={item.name}
          label={item.name}
          url={item.url}
          active={activeItem === item.name}
          onClick={() => handleNavigate(item.name)}
        />
      ))}
      <a className="headerCta btn btn-primary btn-compact fs-11px" href="#contact" onClick={onClose}>
        Talk To Us <span aria-hidden="true">→</span>
      </a>
    </nav>
  );
}

export function SiteHeader() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#edf1ee] sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="flex h-[62px] items-center justify-between">
          <BrandLink />
          <MainNavigation activeItem={activeItem} onNavigate={setActiveItem} />
          <button
            className="mobileMenuToggle flex md:hidden"
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
        <MobileNavigation
          activeItem={activeItem}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onNavigate={setActiveItem}
        />
      </div>
    </header>
  );
}