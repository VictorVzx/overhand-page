import { Sparkles, Zap, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Projeto de aprendizado em Python</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Conheça o
          <br />
          <span className="gradient-text">OverhandBot</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Um bot simples desenvolvido com o intuito de aprender mais sobre Python.
          Use o comando <code className="px-2 py-1 rounded-lg bg-primary/10 text-primary font-mono">/menu</code> para explorar os comandos interativos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#"
            className="btn-glow w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Adicionar ao Discord
          </a>
          <a
            href="#commands"
            className="w-full sm:w-auto px-8 py-4 glass rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Terminal className="w-5 h-5" />
            Ver Comandos
          </a>
        </div>

        {/* Command Preview */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card max-w-md mx-auto text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">&gt;</span> /menu
              </p>
              <p className="text-foreground/80">
                📋 Menu de Comandos Interativos
              </p>
              <p className="text-muted-foreground text-xs">
                Selecione uma opção abaixo...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
