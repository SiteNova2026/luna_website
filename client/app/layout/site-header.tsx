"use client";
import { useState } from "react";

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

function MainNavigation() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
      <NavigationLink label="Home" url="/" active={activeItem === "Home"} onClick={() => setActiveItem("Home")} />
      {navigationItems.map((item) => (
        <NavigationLink key={item.name} label={item.name} url={item.url} active={activeItem === item.name} onClick={() => setActiveItem(item.name)} />
      ))}
      <a className="headerCta btn btn-primary btn-compact fs-11px" href="#contact">
      Talk To Us <span aria-hidden="true">→</span>
    </a>
    </nav>
  );
}


export function SiteHeader() {
  return (
    <header className="border-b border-[#edf1ee] sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[62px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12 ">
        <BrandLink />
        <MainNavigation />
      </div>
    </header>
  );
}