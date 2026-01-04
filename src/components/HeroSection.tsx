import { Sparkles, Zap, Shield } from "lucide-react";

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
          <span className="text-sm font-medium">O melhor bot para seu servidor</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Potencialize seu servidor
          <br />
          <span className="gradient-text">Discord</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Moderação avançada, música de qualidade, economia divertida e muito mais.
          Tudo em um único bot poderoso e fácil de usar.
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
            href="#features"
            className="w-full sm:w-auto px-8 py-4 glass rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Shield className="w-5 h-5" />
            Ver Recursos
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text">10K+</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Servidores</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text">500K+</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Usuários</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text">99.9%</div>
            <div className="text-sm md:text-base text-muted-foreground mt-1">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
