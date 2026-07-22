"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "@/components/BrandMark";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/Icons";
import { business, navigation } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                className={active ? "desktop-nav__link desktop-nav__link--active" : "desktop-nav__link"}
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          className="button button--small site-header__order"
          href={business.links.directOrder}
          target="_blank"
          rel="noreferrer"
        >
          Order now <ArrowUpRight />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav__inner" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "mobile-nav__link mobile-nav__link--active" : "mobile-nav__link"}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <a
            className="button button--sun button--wide"
            href={business.links.directOrder}
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            Start an order <ArrowUpRight />
          </a>
          <a
            className="mobile-nav__phone"
            href={business.phoneHref}
            tabIndex={menuOpen ? 0 : -1}
          >
            Call {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
