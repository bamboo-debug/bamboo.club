"use client";

import Link from "next/link";
import { useState } from "react";
import type { Route } from "next";

type NavLink = { href: Route; label: string };

const primaryLinks: NavLink[] = [
  { href: "/modules",     label: "Módulos"   },
  { href: "/blog",        label: "Blog"      },
  { href: "/leaderboard", label: "Ranking"   },
];

const secondaryLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/auth",      label: "Ingresar"  },
];

function BambooLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="url(#bamboo-grad)" />
      <rect x="6"  y="20" width="5" height="10" rx="1.5" fill="white" opacity="0.9" />
      <rect x="6"  y="15" width="5" height="4"  rx="1"   fill="white" opacity="0.5" />
      <rect x="13" y="13" width="5" height="17" rx="1.5" fill="white" opacity="0.9" />
      <rect x="13" y="8"  width="5" height="4"  rx="1"   fill="white" opacity="0.5" />
      <rect x="20" y="9"  width="5" height="21" rx="1.5" fill="white" opacity="0.9" />
      <rect x="20" y="4"  width="5" height="4"  rx="1"   fill="white" opacity="0.5" />
      <defs>
        <linearGradient id="bamboo-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0fcfb4" />
          <stop offset="100%" stopColor="#0a9e8a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      {open ? (
        <>
          <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container header-inner" style={{ minHeight: 64 }}>

          {/* Logo */}
          <Link href="/" className="brand-link" onClick={() => setOpen(false)}>
            <BambooLogo />
            <span>
              <span className="brand-logo-text">BAMBOO</span>
              <small>by TEXO · Club de innovación</small>
            </span>
          </Link>

          {/* Nav desktop — oculto en mobile */}
          <nav className="nav-shell desktop-nav">
            <div className="nav muted">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ fontSize: "0.92rem" }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="nav-actions">
              {secondaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn btn-secondary btn-compact">
                  {link.label}
                </Link>
              ))}
              <Link href="/join" className="btn btn-primary btn-compact">
                Sumarme
              </Link>
            </div>
          </nav>

          {/* Hamburger — solo en mobile */}
          <button
            className="hamburger-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="mobile-overlay"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <nav className="mobile-drawer">
            <div className="mobile-drawer-links">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-drawer-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mobile-drawer-divider" />
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-drawer-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                className="btn btn-primary"
                style={{ marginTop: 8, textAlign: "center" }}
                onClick={() => setOpen(false)}
              >
                Sumarme
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
