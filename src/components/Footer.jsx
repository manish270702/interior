import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return <footer className="bg-ink text-white">
    <div className="section grid gap-10 py-16 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="display text-3xl font-bold">TJ Interio</div>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/60">Premium modular kitchens, wardrobes and complete home interiors designed around the way you live.</p>
      </div>
      <div>
        <h3 className="font-semibold">Explore</h3>
        <div className="mt-4 grid gap-3 text-sm text-white/60">
          <Link to="/modular-kitchen">Modular Kitchen</Link>
          <Link to="/wardrobes">Wardrobes</Link>
          <Link to="/interiors">Home Interiors</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Contact</h3>
        <div className="mt-4 grid gap-3 text-sm text-white/60">
          <span className="flex gap-2"><Phone size={16}/> +91 9414405430</span>
          <span className="flex gap-2"><Mail size={16}/> tjinterio@gmail.com</span>
          <span className="flex gap-2"><MapPin size={16}/> Jaipur, Rajasthan</span>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">© 2026 TJInterio Interiors. All rights reserved.</div>
  </footer>
}