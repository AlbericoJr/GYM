import { ArrowUpRight, Dumbbell, Github, Mail } from "lucide-react"
import { Link } from "react-router-dom"
export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#0a0b0d] text-gray-200">
    <div className="gym-container grid gap-12 py-16 md:grid-cols-3">
      <div className="md:col-span-1"><Link to="/" className="inline-flex items-center gap-2 text-3xl font-extrabold tracking-tight text-white"><Dumbbell className="text-orange-500" /> GYM<span className="text-orange-500">.</span></Link><p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">Mais movimento, mais energia e uma nova forma de viver o fitness. Um conceito de experiência digital para academias.</p></div>
      <div><h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">Explore</h2><ul className="space-y-3 text-sm text-gray-400"><li><Link className="hover:text-orange-400" to="/about">Sobre a GYM</Link></li><li><Link className="hover:text-orange-400" to="/services">Modalidades</Link></li><li><Link className="hover:text-orange-400" to="/pricingPlan">Planos ilustrativos</Link></li><li><Link className="hover:text-orange-400" to="/trainers">Equipe demonstrativa</Link></li></ul></div>
      <div><h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">Vamos conversar?</h2><p className="mb-5 text-sm leading-relaxed text-gray-400">Explore o formulário demonstrativo ou conheça o código do projeto.</p><Link className="gym-button gym-button-outline" to="/contact"><Mail size={17}/> Página de contato <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="border-t border-white/10"><div className="gym-container flex flex-col items-start justify-between gap-4 py-6 text-xs text-gray-500 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} GYM • Projeto demonstrativo, sem vínculo com academia real.</p><a className="inline-flex items-center gap-2 hover:text-orange-300" href="https://github.com/AlbericoJr/GYM" target="_blank" rel="noopener noreferrer"><Github size={16}/> Desenvolvido por Albérico Júnior <ArrowUpRight size={14}/></a></div></div>
  </footer>
}
