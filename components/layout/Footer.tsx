import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-jost text-lg tracking-[0.14em] font-medium text-text">
          DVSY
        </Link>
        <div className="flex gap-5 md:gap-6">
          <Link href="#" className="text-[11px] text-text-dim hover:text-text transition-colors tracking-[0.06em]">
            Instagram
          </Link>
          <Link href="#" className="text-[11px] text-text-dim hover:text-text transition-colors tracking-[0.06em]">
            Pinterest
          </Link>
          <Link href="/contato" className="text-[11px] text-text-dim hover:text-text transition-colors tracking-[0.06em]">
            Contato
          </Link>
          <Link href="/politica-privacidade" className="text-[11px] text-text-dim hover:text-text transition-colors tracking-[0.06em]">
            Privacidade
          </Link>
          <Link href="/termos-uso" className="text-[11px] text-text-dim hover:text-text transition-colors tracking-[0.06em]">
            Termos
          </Link>
        </div>
        <div className="text-[11px] text-text-faint tracking-[0.04em]">
          © 2026 DVSY. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}