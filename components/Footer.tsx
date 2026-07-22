import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { ArrowUpRight, InstagramIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { business, navigation } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__marquee" aria-hidden="true">
        <div>
          GYROS <span>✦</span> SOUVLAKI <span>✦</span> MEZE <span>✦</span> GOOD TIMES <span>✦</span>
          GYROS <span>✦</span> SOUVLAKI <span>✦</span> MEZE <span>✦</span> GOOD TIMES <span>✦</span>
        </div>
      </div>
      <div className="shell site-footer__main">
        <div className="site-footer__brand">
          <BrandMark light />
          <p>{business.description}</p>
          <a
            className="footer-social"
            href={business.links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon /> @greekstreet_walthamcross
          </a>
        </div>
        <div className="site-footer__column">
          <p className="footer-heading">Explore</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="site-footer__column site-footer__contact">
          <p className="footer-heading">Come hungry</p>
          <a href={business.links.directions} target="_blank" rel="noreferrer">
            <PinIcon />
            <span>{business.address.display}</span>
          </a>
          <a href={business.phoneHref}>
            <PhoneIcon />
            <span>{business.phoneDisplay}</span>
          </a>
          <a href={business.links.directOrder} target="_blank" rel="noreferrer">
            <ArrowUpRight />
            <span>Order direct</span>
          </a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Greek Street Waltham Cross.</p>
        <p>Prices and availability can change. Check the live order menu.</p>
      </div>
    </footer>
  );
}
