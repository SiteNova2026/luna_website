import Image from "next/image";

const navigationItems = ["Solutions", "Industries", "Services", "News", "Contact"];

function BrandLink() {
  return (
    <a href="#home" aria-label="Luna home">
      <Image src="/images/logo.png" alt="" width={161} height={74} priority className="wordmark" />
    </a>
  );
}

function NavigationLink({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <a className={`${active ? "activeNav" : "navLink"} fs-11px`} href={`#${label.toLowerCase()}`}>
      {label}
    </a>
  );
}

function MainNavigation() {
  return (
    <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
      <NavigationLink label="Home" active />
      {navigationItems.map((item) => <NavigationLink key={item} label={item} />)}
      <a className="headerCta btn btn-primary btn-compact" href="#contact">
      Talk To Us <span aria-hidden="true">→</span>
    </a>
    </nav>
  );
}


export function SiteHeader() {
  return (
    <header className="border-b border-[#edf1ee]">
      <div className="mx-auto flex h-[62px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12 ">
        <BrandLink />
        <MainNavigation />
      </div>
    </header>
  );
}