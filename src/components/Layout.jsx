import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data/products";
import Mark from "./Mark";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-[var(--color-bg-primary)] font-sans text-[var(--color-text-primary)]">
      <header className="relative z-50 flex h-[72px] items-center justify-between gap-6 border-b border-[#332620] bg-[#1a1412] px-[6vw] md:h-20 md:gap-12 md:px-[8vw] transition-all duration-300">
        <Link
          to="/"
          className="whitespace-nowrap text-sm tracking-[.2em] text-[#FAF9F6] transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span className="font-semibold">YAMIN</span>{' '}
          <span className="font-light text-[#d3ac9b]">THEINT</span>
        </Link>
        <button
          className="order-3 text-[#d3ac9b] md:hidden hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Mark name={open ? "close" : "menu"} />
        </button>
        <nav
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col gap-6 border-b border-[#332620] bg-[#1a1412] px-[6vw] py-8 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 transition-all`}
        >
          {navigation.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[.15em] transition-all duration-300 ${isActive ? "text-[#d3ac9b] font-semibold" : "text-[#a89286] hover:text-[#e5c5b5]"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-3 border border-[#d3ac9b]/40 px-5 py-2.5 text-[10px] uppercase tracking-[.2em] font-medium text-[#d3ac9b] md:flex hover:bg-[#d3ac9b] hover:text-[#1a1412] transition-all duration-300"
        >
          DISCOVER MORE
        </Link>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#332620] bg-[#1a1412] px-[8vw] py-16 md:py-24">
        <div className="flex flex-col gap-8 pb-16 md:flex-row md:items-center md:gap-12 md:pb-20 border-b border-[#332620] mb-8">
          <Link
            to="/"
            className="whitespace-nowrap text-sm tracking-[.2em] text-[#FAF9F6]"
          >
            <span className="font-semibold">YAMIN</span>{' '}
            <span className="font-light text-[#d3ac9b]">THEINT</span>
          </Link>
          <p className="m-0 text-xl font-serif italic text-[#a89286]">
            Beauty rooted in nature.
          </p>
          <div className="flex gap-4 md:ml-auto">
            <a
              className="grid size-10 place-items-center rounded-full border border-[#332620] text-[#d3ac9b] hover:bg-[#d3ac9b] hover:text-[#1a1412] transition-all duration-300"
              href="https://instagram.com"
              aria-label="Instagram"
            >
              <Mark name="instagram" />
            </a>
            <a
              className="grid size-10 place-items-center rounded-full border border-[#332620] text-[#d3ac9b] hover:bg-[#d3ac9b] hover:text-[#1a1412] transition-all duration-300"
              href="mailto:hello@yamintheint.com"
              aria-label="Email"
            >
              <Mark name="arrow" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 text-xs tracking-[.05em] text-[#a89286]">
          <span>&copy; 2026 Yamin Theint</span>
          <span>Yangon, Myanmar</span>
          <a className="hover:text-[#d3ac9b] transition-colors" href="mailto:hello@yamintheint.com">
            hello@yamintheint.com
          </a>
        </div>
      </footer>
    </div>
  );
}
