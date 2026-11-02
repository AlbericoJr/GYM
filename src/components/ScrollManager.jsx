import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollManager() {
  const {pathname, hash} = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
    } else {
      window.scrollTo({top:0,behavior:"instant"})
    }
    const nodes=Array.from(document.querySelectorAll("[data-reveal]"))
    const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!("IntersectionObserver" in window) || reduceMotion) {
      nodes.forEach(node=>node.classList.add("reveal-visible"))
      return
    }
    // Content remains visible until observers are ready.
    document.body.classList.add("reveal-ready")
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("reveal-visible");observer.unobserve(entry.target)}})
    },{threshold:0.08,rootMargin:"0px 0px -28px 0px"})
    nodes.forEach(node=>observer.observe(node))
    return ()=>observer.disconnect()
  },[pathname,hash])
  return null
}
