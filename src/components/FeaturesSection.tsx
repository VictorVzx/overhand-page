import { Terminal, Code2, Lightbulb, Heart } from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Comandos Interativos",
    description: "Use /menu para acessar todos os comandos disponíveis de forma simples e intuitiva.",
  },
  {
    icon: Code2,
    title: "Feito em Python",
    description: "Desenvolvido utilizando discord.py como parte de um projeto de aprendizado em programação.",
  },
  {
    icon: Lightbulb,
    title: "Simples e Direto",
    description: "Sem complicações. Um bot leve e funcional para explorar as possibilidades do Discord.",
  },
  {
    icon: Heart,
    title: "Projeto de Estudo",
    description: "Criado com dedicação para aprender e evoluir no desenvolvimento de bots.",
  },
];

export function FeaturesSection() {
  return (
    <section id="commands" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre o <span className="gradient-text">Bot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um projeto simples criado para aprender mais sobre Python e a API do Discord.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
