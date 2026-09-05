import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/modular-kitchen', 'Kitchen'],
  ['/wardrobes', 'Wardrobe'],
  ['/interiors', 'Interiors'],
  ['/projects', 'Projects'],
  ['/about', 'About']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur">
      <div className="section flex h-20 items-center justify-between">
        <Link to="/" className="display text-2xl font-bold tracking-tight">TJ Interio</Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `text-sm font-medium ${isActive ? 'text-sand' : 'text-ink/75 hover:text-ink'}`}>{label}</NavLink>)}
          <Link to="/contact" className="btn-primary">Get Free Quote</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-black/5 px-5 pb-5 md:hidden">
        {links.map(([to, label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="block border-b border-black/5 py-4 text-sm">{label}</NavLink>)}
        <Link onClick={() => setOpen(false)} to="/contact" className="btn-primary mt-4 w-full">Get Free Quote</Link>
      </div>}
    </header>
  )
}