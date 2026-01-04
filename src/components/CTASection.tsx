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
              Quer testar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Adicione o OverhandBot ao seu servidor e explore os comandos interativos usando <code className="px-2 py-1 rounded-lg bg-primary/10 text-primary font-mono">!menu</code>.
            </p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1440503826917363772&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
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
