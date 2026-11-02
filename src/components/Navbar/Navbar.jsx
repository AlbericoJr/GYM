import { Dumbbell, Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const links = [
  { name: "Início", to: "/" },
  { name: "Sobre", to: "/about" },
  { name: "Serviços", to: "/services" },
  { name: "Planos", to: "/pricingPlan" },
  { name: "Contato", to: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav aria-label="Navegação principal" className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#171717]/95 px-4 py-3 shadow-lg backdrop-blur-md sm:px-6 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <NavLink to="/" onClick={() => setOpen(false)} aria-label="GYM - página inicial" className="flex items-center gap-1 text-2xl font-bold tracking-wider text-orange-500">
          <Dumbbell aria-hidden="true" size={22} /> GYM
        </NavLink>
        <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-controls="gym-mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 md:hidden">
          {open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}
        </button>
        <div id="gym-mobile-menu" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-4 border-b border-white/10 bg-[#171717] px-6 py-6 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
          {links.map(item => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} end={item.to === "/"} className={({isActive}) => `rounded text-base font-medium transition-colors hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 ${isActive ? "text-orange-400" : "text-gray-100"}`}>{item.name}</NavLink>)}
          <NavLink to="/pricingPlan" onClick={() => setOpen(false)} className="rounded bg-orange-600 px-4 py-2 text-center font-semibold text-white hover:bg-orange-700">Conhecer planos</NavLink>
        </div>
      </div>
    </nav>
  )
}
