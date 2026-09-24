import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/products'
import Mark from './Mark'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  return <div className="overflow-hidden bg-[#fffaf3] font-['Roboto',sans-serif] text-[#4b3023]">
    <header className="relative z-10 flex h-[70px] items-center justify-between gap-6 border-b border-[#e1d2c2] bg-[#fffaf3]/95 px-[6vw] md:h-28 md:gap-12 md:px-[8vw]">
      <Link to="/" className="whitespace-nowrap text-[12px] tracking-[.22em] text-[#4b3023]" onClick={() => setOpen(false)}><span className="font-semibold">YAMIN</span> THEINT</Link>
      <button className="order-3 text-[#4b3023] md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Mark name={open ? 'close' : 'menu'} /></button>
      <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-[70px] flex-col gap-5 border-b border-[#e1d2c2] bg-[#fffaf3] px-[6vw] py-6 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>{navigation.map(([path, label]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => `text-[11px] uppercase tracking-[.1em] transition-colors ${isActive ? 'text-[#4b3023]' : 'text-[#765f50] hover:text-[#4b3023]'}`}>{label}</NavLink>)}</nav>
      <Link to="/contact" className="hidden items-center gap-4 border border-[#b89073] px-4 py-3 text-[11px] tracking-wide text-[#4b3023] md:flex">Find your ritual <Mark name="arrow" /></Link>
    </header>
    <main>{children}</main>
    <footer className="border-t border-[#e1d2c2] bg-[#f4e8da] px-[8vw] py-10">
      <div className="flex flex-col gap-6 pb-12 md:flex-row md:items-center md:gap-10 md:pb-[75px]"><Link to="/" className="whitespace-nowrap text-[12px] tracking-[.22em] text-[#4b3023]"><span className="font-semibold">YAMIN</span> THEINT</Link><p className="m-0 text-lg italic text-[#8d7565]">Beauty, distilled to its purest form.</p><div className="flex gap-3 md:ml-auto"><a className="grid size-[34px] place-items-center border border-[#d2b9a3] text-[#a56c3f]" href="https://instagram.com" aria-label="Instagram"><Mark name="instagram" /></a><a className="grid size-[34px] place-items-center border border-[#d2b9a3] text-[#a56c3f]" href="mailto:hello@yamintheint.com" aria-label="Email"><Mark name="arrow" /></a></div></div>
      <div className="flex flex-wrap justify-between gap-3 text-[10px] tracking-[.08em] text-[#8d7565]"><span>Copyright 2026 Yamin Theint</span><span>Yangon, Myanmar</span><a className="text-[#a56c3f]" href="mailto:hello@yamintheint.com">hello@yamintheint.com</a></div>
    </footer>
  </div>
}
