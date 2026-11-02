import { Dumbbell } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [notice, setNotice] = useState("")
  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const subject = String(data.get("subject") || "").trim()
    const message = String(data.get("message") || "").trim()
    if (!name || !email || !subject || !message || message.length > 2000) {
      setNotice("Preencha todos os campos. A mensagem deve ter até 2.000 caracteres.")
      return
    }
    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`
    const url = `mailto:contato@gym.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNotice("Seu aplicativo de e-mail será aberto. Nenhuma mensagem foi enviada automaticamente.")
    window.location.href = url
  }
  return <section className="mx-auto max-w-5xl px-4 py-16 text-gray-100 sm:px-6">
    <h1 className="mb-4 flex items-center justify-center gap-2 text-2xl font-bold"><Dumbbell className="text-orange-500" aria-hidden="true"/> Entre em contato</h1>
    <p className="mb-8 text-center text-sm text-gray-400">Demonstração: o formulário abre seu aplicativo de e-mail. O endereço é ilustrativo; não há envio por servidor.</p>
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <div><label htmlFor="contact-name" className="mb-2 block">Nome</label><input required id="contact-name" name="name" maxLength={100} autoComplete="name" className="w-full rounded border border-gray-600 bg-transparent p-3" /></div>
      <div><label htmlFor="contact-email" className="mb-2 block">E-mail</label><input required id="contact-email" name="email" type="email" maxLength={200} autoComplete="email" className="w-full rounded border border-gray-600 bg-transparent p-3" /></div>
      <div className="sm:col-span-2"><label htmlFor="contact-subject" className="mb-2 block">Assunto</label><input required id="contact-subject" name="subject" maxLength={120} className="w-full rounded border border-gray-600 bg-transparent p-3" /></div>
      <div className="sm:col-span-2"><label htmlFor="contact-message" className="mb-2 block">Mensagem</label><textarea required id="contact-message" name="message" maxLength={2000} rows={6} className="w-full rounded border border-gray-600 bg-transparent p-3" /></div>
      <button type="submit" className="rounded bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-700 sm:col-span-2">Preparar e-mail</button>
      <p className="text-sm text-orange-300 sm:col-span-2" role="status" aria-live="polite">{notice}</p>
    </form>
  </section>
}
