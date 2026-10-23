import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "ERP Preview", href: "#product" },
  { label: "Contact", href: "#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a href="#home" aria-label="Luna home">
            <Image src="/images/logo.png" alt="Luna" width={161} height={74} />
          </a>
          <p className="fs-10px">Customized ERP solutions for manufacturing, construction, RMC, and more. One platform for every part of your business.</p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          <p className="site-footer-heading fs-8px">Explore</p>
          {footerLinks.map((link) => (
            <a className="fs-9px" href={link.href} key={link.label}>{link.label}</a>
          ))}
        </nav>

        <div className="site-footer-office">
          <p className="site-footer-heading fs-8px">Head Office</p>
          <address className="fs-9px">1094, CBH Road, Nagercoil-629001,<br />Tamil Nadu, India.</address>
          <a className="fs-9px" href="mailto:marketing@lunaerpsolution.com">marketing@lunaerpsolution.com</a>
          <a className="fs-9px" href="tel:+918610133882">+91 8610133882</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p className="fs-8px">2026 © Luna IT Solutions. All rights reserved.</p>
        <a className="fs-8px" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}