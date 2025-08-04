import React, { useEffect } from 'react';
import { 
  Play, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Award,
  Coffee,
  Zap,
  Target,
  Heart
} from 'lucide-react';

declare global {
  interface Window {
    Wistia: any;
    _wq: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Ensure Wistia scripts are loaded
    if (!window.Wistia) {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Wistia queue if not exists
    if (!window._wq) {
      window._wq = [];
    }

    // Configure Wistia video when ready
    window._wq.push({
      id: "gc9ywrd50y",
      onReady: function(video: any) {
        console.log("Wistia video ready:", video);
      }
    });
  }, []);

  const handleCTAClick = () => {
    // Track conversion
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    
    // Redirect to checkout
    window.open('https://pay.kiwify.com.br/VqQNvAj', '_blank');
  };

  const benefits = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Protocolo Simples",
      description: "Apenas café preto e jejum intermitente"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energia Constante",
      description: "Sem picos e quedas de energia"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco Mental",
      description: "Clareza mental e concentração aprimorada"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Saúde Otimizada",
      description: "Melhora da saúde metabólica"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 8kg em 30 dias",
      text: "O protocolo mudou minha vida! Nunca pensei que seria tão simples.",
      rating: 5
    },
    {
      name: "João Santos",
      result: "15kg em 2 meses",
      text: "Incrível como o café preto pode fazer toda a diferença no jejum.",
      rating: 5
    },
    {
      name: "Ana Costa",
      result: "12kg em 45 dias",
      text: "Finalmente encontrei algo que funciona de verdade!",
      rating: 5
    }
  ];

  const features = [
    "Protocolo completo passo a passo",
    "Guia de preparação do café ideal",
    "Cronograma de jejum personalizado",
    "Lista de alimentos permitidos",
    "Receitas especiais para quebra do jejum",
    "Suporte via WhatsApp por 30 dias",
    "Garantia de 7 dias ou seu dinheiro de volta"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              PROTOCOLO
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                JEJUM COM CAFÉ PRETO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              O método revolucionário que está transformando vidas através do jejum intermitente potencializado
            </p>
          </div>

          {/* VSL Container */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="wistia_responsive_padding" style={{paddingTop: '56.25%'}}>
                <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
                  <div className="wistia_embed wistia_async_gc9ywrd50y videoFoam=true" style={{height: '100%', position: 'relative', width: '100%'}}>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-green-500" />
              <span className="text-white font-semibold">+10.000 pessoas transformadas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="text-white font-semibold">4.9/5 estrelas</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              <span className="text-white font-semibold">98% de sucesso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Por que o Protocolo Jejum com Café Preto Funciona?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Resultados Reais de Pessoas Reais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-orange-500 font-bold">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-900/95 to-amber-800/95">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            OFERTA ESPECIAL
          </h2>
          <p className="text-xl text-orange-100/80 mb-8">
            Acesso completo ao Protocolo Jejum com Café Preto
          </p>

          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="mb-6">
              <span className="text-gray-400 text-xl line-through">De R$ 297</span>
              <span className="text-5xl font-black text-white ml-4">R$ 97</span>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleCTAClick}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              QUERO TRANSFORMAR MINHA VIDA AGORA
            </button>

            <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 px-4 bg-red-500/10 border-t border-red-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-red-500" />
            <span className="text-red-500 font-bold text-lg">ATENÇÃO: OFERTA LIMITADA</span>
          </div>
          <p className="text-white mb-6">
            Esta oferta especial é válida apenas para os primeiros 100 alunos. 
            Não perca esta oportunidade única de transformar sua vida!
          </p>
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-orange-500/20 text-orange-300 hover:text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300"
          >
            GARANTIR MINHA VAGA AGORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-gray-400 text-sm mb-4">
            © 2024 Protocolo Jejum com Café Preto. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Este produto não substitui o acompanhamento médico. Consulte sempre um profissional de saúde.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;