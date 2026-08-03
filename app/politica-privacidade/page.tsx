import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PoliticaPrivacidade() {
  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-[820px] mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-text-dim hover:text-text transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <h1 className="font-jost text-4xl md:text-5xl font-light tracking-[0.02em] mb-6">
          Política de <span className="text-accent-bright">Privacidade</span>
        </h1>
        <p className="text-text-faint text-sm mb-8">Última atualização: Agosto de 2026</p>
        
        <div className="bg-dark-card border border-line rounded p-6 md:p-8 space-y-6 text-text-dim text-sm leading-relaxed">
          <p>
            Na DVSY, respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. 
            Esta política explica como coletamos, usamos e protegemos suas informações.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">1. Informações que Coletamos</h2>
          <p>
            Coletamos informações que você nos fornece voluntariamente ao entrar em contato, fazer um pedido 
            ou preencher formulários em nosso site, como nome, e-mail, telefone e endereço de entrega.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">2. Como Usamos Suas Informações</h2>
          <p>
            Utilizamos suas informações para processar pedidos, responder a perguntas, melhorar nossos serviços 
            e enviar comunicações relacionadas às suas compras.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">3. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos seus dados com terceiros, exceto quando necessário para processar pagamentos 
            e entregar pedidos, ou com seu consentimento explícito.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, 
            perda ou destruição.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">5. Seus Direitos</h2>
          <p>
            Você tem direito a acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento, 
            entrando em contato conosco.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">6. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação e lembrar itens no carrinho. 
            Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
          </p>
          
          <h2 className="font-jost text-xl font-light text-text">7. Contato</h2>
          <p>
            Para questões sobre esta política, entre em contato pelo e-mail: privacidade@dvsy.com.br
          </p>
        </div>
      </div>
    </section>
  )
}