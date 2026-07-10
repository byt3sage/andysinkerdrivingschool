"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/driving-lessons", label: "Driving Lessons" },
  { href: "/instructor-training", label: "Instructor Training" },
  { href: "/franchise", label: "Franchising" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div className={`mobile-menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation">
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="button-secondary"
          href="/ppc/driving-lessons"
          onClick={() => setOpen(false)}
        >
          Book Lessons
        </Link>
      </nav>
    </div>
  );

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger ${open ? "is-open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
