import Image from "next/image";

const navigationItems = ['Home', 'Industry Solutions', 'Services', 'About Us', 'Our Project'];
const currentYear = new Date().getFullYear();
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a href="#home" aria-label="Luna home">
            <Image src="/images/logo.png" alt="Luna" width={161} height={74} />
          </a>
          <p className="fs-12px">Customized ERP solutions for manufacturing, construction, RMC, and more. One platform for every part of your business.</p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          <p className="site-footer-heading fs-12px">Explore</p>
          {navigationItems.map((item) => (
            <a className="fs-12px" href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="site-footer-office">
          <p className="site-footer-heading fs-12px">Head Office</p>
          <address className="fs-12px">No 6, Victoria Nagar, Nanjikottai Road,<br />Thanjavur-613006, Tamil Nadu, India.</address>
          <a className="fs-12px lowercase" href="mailto:lunaerpsolutions@gmail.com">lunaerpsolutions@gmail.com</a>
          <a className="fs-12px" href="tel:+917708926698">+91 7708926698</a>
          <a className="fs-12px" href="tel:+918428280089">+91 8428280089</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p className="fs-12px">{currentYear} © Luna IT Solutions. All rights reserved.</p>
        <a className="fs-12px" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}