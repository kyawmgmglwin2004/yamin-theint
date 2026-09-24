import { Link } from 'react-router-dom'
import Mark from './Mark'

export default function Button({ children, to = '/contact', light = false }) {
  return <Link to={to} className={`inline-flex min-w-44 items-center justify-between gap-7 border px-[18px] py-[15px] text-[11px] tracking-wide transition-colors ${light ? 'border-[#a56c3f] bg-transparent text-[#a56c3f] hover:bg-[#a56c3f] hover:text-[#fffaf3]' : 'border-[#a56c3f] bg-[#a56c3f] text-[#fffaf3] hover:bg-transparent hover:text-[#a56c3f]'}`}>{children}<Mark name="arrow" /></Link>
}
