import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Adicione o bot ao seu servidor agora mesmo e descubra todas as funcionalidades incríveis que preparamos para você.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 btn-glow px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Adicionar ao Discord
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
