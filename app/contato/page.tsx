import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function Contato() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-[820px] mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-jost text-5xl md:text-6xl font-light tracking-[0.02em] mb-6">
          Fale <span className="text-accent-bright">conosco</span>
        </h1>
        <p className="text-text-dim text-lg max-w-2xl mb-12">
          Entre em contato para dúvidas, parcerias ou sugestões.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-card border border-line rounded p-6">
            <Mail className="w-6 h-6 text-accent-bright mb-3" />
            <h3 className="font-jost font-medium">E-mail</h3>
            <p className="text-text-dim text-sm">contato@dvsy.com.br</p>
          </div>
          <div className="bg-dark-card border border-line rounded p-6">
            <Phone className="w-6 h-6 text-accent-bright mb-3" />
            <h3 className="font-jost font-medium">Telefone</h3>
            <p className="text-text-dim text-sm">(11) 99999-9999</p>
          </div>
          <div className="bg-dark-card border border-line rounded p-6">
            <MapPin className="w-6 h-6 text-accent-bright mb-3" />
            <h3 className="font-jost font-medium">Endereço</h3>
            <p className="text-text-dim text-sm">São Paulo - SP</p>
          </div>
        </div>
      </div>
    </div>
  )
}