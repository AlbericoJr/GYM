import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ArrowUpRight, Check, Copy, Dumbbell, Mail, MessageCircle } from "lucide-react"

const email = import.meta.env.VITE_GYM_CONTACT_EMAIL || ""
export default function Contact() {
  const [search] = useSearchParams()
  const subject = search.get("plano") ? "Interesse no plano "+search.get("plano") : (search.get("assunto") || "")
  const [notice, setNotice] = useState("")
  const [prepared, setPrepared] = useState("")
  const [copied, setCopied] = useState(false)

  function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const values = new FormData(form)
    const name = String(values.get("name") || "").trim()
    const contact = String(values.get("email") || "").trim()
    const topic = String(values.get("subject") || "").trim()
    const message = String(values.get("message") || "").trim()
    if (!name || !contact || !topic || !message) { setNotice("Preencha todos os campos."); return }
    const summary = "Nome: "+name+"\nE-mail: "+contact+"\nAssunto: "+topic+"\n\nMensagem:\n"+message
    setPrepared(summary)
    setCopied(false)
    setNotice("Mensagem preparada. Copie o texto ou abra o aplicativo de e-mail, se disponível.")
  }
  async function copyMessage() {
    try { await navigator.clipboard.writeText(prepared); setCopied(true) }
    catch { setNotice("Cópia automática indisponível. Selecione o texto na caixa abaixo para copiar.") }
  }

  return <section className="gym-section gym-glow"><div className="gym-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
    <div data-reveal><p className="gym-eyebrow"><Dumbbell size={17}/> Fale com a gente</p><h1 className="gym-title mt-5">O PRIMEIRO PASSO <span className="text-orange-500">COMEÇA AQUI.</span></h1><p className="gym-text mt-6">Tem dúvidas sobre modalidades ou planos? Preencha a mensagem e veja como seria uma experiência de contato na GYM.</p>
      <div className="gym-panel mt-9 space-y-5 p-6"><div className="flex items-start gap-3"><MessageCircle className="mt-1 shrink-0 text-orange-400"/><div><h2 className="font-bold">Projeto demonstrativo</h2><p className="mt-1 text-sm leading-7 text-gray-400">Este formulário não envia dados a um servidor, não cria matrículas e não coleta contatos automaticamente.</p></div></div><div className="flex items-start gap-3"><Mail className="mt-1 shrink-0 text-orange-400"/><div><h2 className="font-bold">Contato configurável</h2><p className="mt-1 text-sm leading-7 text-gray-400">O responsável pelo site pode configurar o e-mail público de contato para ativar a opção de abrir seu aplicativo de e-mail.</p></div></div></div>
    </div>
    <div data-reveal className="gym-panel p-6 sm:p-9">
      <h2 className="text-2xl font-extrabold">Envie sua ideia</h2><p className="mt-2 text-sm text-gray-400">Os campos são obrigatórios. Não insira informações pessoais sensíveis.</p>
      <form onSubmit={submit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold">Seu nome<input required name="name" autoComplete="name" maxLength={100} placeholder="Nome completo" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#111214] p-3.5 font-normal text-white placeholder:text-gray-600 focus:border-orange-500" /></label>
          <label className="block text-sm font-semibold">Seu e-mail<input required type="email" name="email" autoComplete="email" maxLength={200} placeholder="seu@email.com" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#111214] p-3.5 font-normal text-white placeholder:text-gray-600 focus:border-orange-500" /></label>
        </div>
        <label className="block text-sm font-semibold">Assunto<input key={subject} required name="subject" defaultValue={subject} maxLength={120} placeholder="Sobre qual assunto?" className="mt-2 block w-full rounded-lg border border-white/15 bg-[#111214] p-3.5 font-normal text-white placeholder:text-gray-600 focus:border-orange-500" /></label>
        <label className="block text-sm font-semibold">Mensagem<textarea required name="message" rows={6} maxLength={2000} placeholder="Conte como podemos ajudar..." className="mt-2 block w-full resize-y rounded-lg border border-white/15 bg-[#111214] p-3.5 font-normal leading-relaxed text-white placeholder:text-gray-600 focus:border-orange-500" /></label>
        <button type="submit" className="gym-button w-full">Preparar mensagem <ArrowUpRight size={18}/></button>
      </form>
      {notice && <p role="status" aria-live="polite" className="mt-5 text-sm text-orange-300">{notice}</p>}
      {prepared && <div className="mt-5 space-y-3"><label htmlFor="prepared-message" className="block text-sm font-semibold">Mensagem pronta</label><textarea id="prepared-message" readOnly rows={6} value={prepared} className="w-full rounded-lg border border-white/15 bg-[#101113] p-3 text-sm text-gray-200" /><div className="flex flex-wrap gap-3"><button type="button" onClick={copyMessage} className="gym-button gym-button-outline"><Copy size={16}/>{copied?"Copiado":"Copiar mensagem"}</button>{email && <a className="gym-button" href={"mailto:"+encodeURIComponent(email)+"?subject="+encodeURIComponent(String(new FormData(document.querySelector('form')).get('subject') || 'Contato GYM'))+"&body="+encodeURIComponent(prepared)}><Mail size={16}/> Abrir e-mail</a>}</div></div>}
    </div>
  </div></section>
}
