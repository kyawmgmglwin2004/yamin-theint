import { Link } from 'react-router-dom'
import Mark from './Mark'

export default function Button({ children, to = '/contact', light = false }) {
  return (
    <Link 
      to={to} 
      className={`group inline-flex min-w-[180px] items-center justify-between gap-6 border px-6 py-4 text-[10px] uppercase tracking-widest transition-all duration-500 ease-out ${
        light 
          ? 'border-[var(--color-border-subtle)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white' 
          : 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-subtle)]'
      }`}
    >
      <span className="font-medium">{children}</span>
      <span className="transform transition-transform duration-500 group-hover:translate-x-2">
        <Mark name="arrow" />
      </span>
    </Link>
  )
}
