import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data/products";
import Mark from "./Mark";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-[var(--color-bg-primary)] font-sans text-[var(--color-text-primary)]">
      <header className="relative z-10 flex h-[80px] items-center justify-between gap-6 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]/90 backdrop-blur-md px-[6vw] md:h-24 md:gap-12 md:px-[8vw] transition-all duration-300">
        <Link
          to="/"
          className="whitespace-nowrap text-sm tracking-[.2em] text-[var(--color-text-primary)] transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          <span className="font-semibold">YAMIN</span> THEINT
        </Link>
        <button
          className="order-3 text-[var(--color-text-primary)] md:hidden hover:opacity-70 transition-opacity"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Mark name={open ? "close" : "menu"} />
        </button>
        <nav
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[80px] flex-col gap-6 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-[6vw] py-8 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 transition-all`}
        >
          {navigation.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[.1em] transition-all duration-300 ${isActive ? "text-[var(--color-text-primary)] font-medium" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-3 border border-[var(--color-border-subtle)] px-5 py-3 text-xs tracking-widest text-[var(--color-text-primary)] md:flex hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-300"
        >
          DISCOVER MORE
        </Link>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-[8vw] py-16 md:py-24">
        <div className="flex flex-col gap-8 pb-16 md:flex-row md:items-center md:gap-12 md:pb-20 border-b border-[var(--color-border-subtle)] mb-8">
          <Link
            to="/"
            className="whitespace-nowrap text-sm tracking-[.2em] text-[var(--color-text-primary)]"
          >
            <span className="font-semibold">YAMIN</span> THEINT
          </Link>
          <p className="m-0 text-xl font-serif italic text-[var(--color-text-muted)]">
            Beauty in its most minimalist form.
          </p>
          <div className="flex gap-4 md:ml-auto">
            <a
              className="grid size-10 place-items-center rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-300"
              href="https://instagram.com"
              aria-label="Instagram"
            >
              <Mark name="instagram" />
            </a>
            <a
              className="grid size-10 place-items-center rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-300"
              href="mailto:hello@yamintheint.com"
              aria-label="Email"
            >
              <Mark name="arrow" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 text-xs tracking-[.05em] text-[var(--color-text-muted)]">
          <span>&copy; 2026 Yamin Theint</span>
          <span>Yangon, Myanmar</span>
          <a className="hover:text-[var(--color-text-primary)] transition-colors" href="mailto:hello@yamintheint.com">
            hello@yamintheint.com
          </a>
        </div>
      </footer>
    </div>
  );
}
