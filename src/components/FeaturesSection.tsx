import { Shield, Music, Coins, MessageSquare, Gamepad2, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Moderação Avançada",
    description: "Auto-mod, anti-spam, logs detalhados e sistema de warns para manter seu servidor seguro.",
  },
  {
    icon: Music,
    title: "Música de Qualidade",
    description: "Reproduza músicas do YouTube, Spotify e SoundCloud com qualidade cristalina.",
  },
  {
    icon: Coins,
    title: "Sistema de Economia",
    description: "Economia completa com moedas, loja, trabalhos e apostas para engajar sua comunidade.",
  },
  {
    icon: MessageSquare,
    title: "Boas-vindas Personalizadas",
    description: "Mensagens de boas-vindas e despedida totalmente customizáveis com embeds.",
  },
  {
    icon: Gamepad2,
    title: "Mini-games Divertidos",
    description: "Diversos jogos como trivia, adivinhação e competições entre membros.",
  },
  {
    icon: Settings,
    title: "Fácil Configuração",
    description: "Dashboard intuitivo para configurar tudo sem precisar de comandos complicados.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recursos <span className="gradient-text">Poderosos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para criar a melhor experiência no seu servidor Discord.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
