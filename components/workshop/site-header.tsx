"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { EXAMPLE_PATH } from "@/lib/workshop-urls";
import { ExternalIcon } from "./icons";

const navLinks = [
  { href: "/", label: "Home", match: (path: string) => path === "/" },
  {
    href: "/guide",
    label: "Guide",
    match: (path: string) => path === "/guide" || path.startsWith("/guide/"),
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const menuId = useId();

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span>
          IADT Computing: <b>Taster Session</b>
        </span>
      </Link>
      <nav aria-label="Main navigation" className="site-header-nav">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={link.match(pathname) ? "active" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
          Meme-ify <ExternalIcon />
        </a>
      </nav>
      <button
        type="button"
        className="site-header-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close menu" : "Menu"}
      </button>
      {menuOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="site-header-mobile-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.match(pathname) ? "active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
            Meme-ify <ExternalIcon />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
