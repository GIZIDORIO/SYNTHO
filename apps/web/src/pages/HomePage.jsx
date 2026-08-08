import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Fingerprint, Sparkles, Eye, Landmark, Users, Compass, Radar, Lightbulb, Map, Wand2, Layers, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const frentes = [{
    icon: Fingerprint,
    title: 'Brand Management',
    description: 'Gestão estratégica de marca para construir, preservar e expandir valor.'
  }, {
    icon: Sparkles,
    title: 'Brand Experience',
    description: 'Experiências que transformam estratégia em conexão real e memorável.'
  }, {
    icon: Eye,
    title: 'Cultural Intelligence',
    description: 'Inteligência cultural para interpretar comportamentos e antecipar o futuro.'
  }, {
    icon: Landmark,
    title: 'Projetos Culturais',
    description: 'Estruturação de projetos e conexão de ideias a recursos e parceiros.'
  }, {
    icon: Users,
    title: 'Gestão de Comunidades',
    description: 'Construção, ativação e fortalecimento de comunidades para gerar valor contínuo.'
  }, {
    icon: Compass,
    title: 'Consultoria Contínua',
    description: 'Acompanhamento estratégico para evoluir com consistência.'
  }];

  const framework = [{
    icon: Radar,
    step: 'Scan',
    description: 'Mapear sinais e movimentos culturais'
  }, {
    icon: Lightbulb,
    step: 'Yield',
    description: 'Gerar insights e oportunidades'
  }, {
    icon: Map,
    step: 'Navigate',
    description: 'Definir caminhos e estratégia'
  }, {
    icon: Wand2,
    step: 'Transform',
    description: 'Transformar em experiências e soluções'
  }, {
    icon: Layers,
    step: 'Harmonize',
    description: 'Integrar tudo com coerência'
  }, {
    icon: TrendingUp,
    step: 'Outcome',
    description: 'Gerar impacto e resultados mensuráveis'
  }];

  const ampliamos = ['Percepção', 'Posicionamento', 'Valor percebido', 'Diferenciação', 'Autoridade', 'Vantagem competitiva'];

  return <>
      <Helmet>
        <title>SYNTHO — Brand Experience e Inteligência Cultural</title>
        <meta name="description" content="SYNTHO é uma infraestrutura estratégica de relevância que transforma inteligência cultural em decisões de marca. Humanizamos marcas, inspiramos pessoas, criamos conexões." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/images/escadaria-luz.jpg" alt="Escadaria em espiral iluminada por um facho de luz, simbolizando direção e relevância" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#021A13]/85 via-[#021A13]/60 to-[#021A13]/90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>
                <p className="text-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-6">
                  Apresentação institucional
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{
                letterSpacing: '-0.02em'
              }}>
                  Humanizamos marcas.<br />Inspiramos pessoas.<br />Criamos conexões.
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Brand Experience e Inteligência Cultural para quem deseja permanecer relevante sem perder sua essência.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/solucoes">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98] group w-full sm:w-auto">
                      Nossas soluções
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto">
                      Falar com a gente
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  O mundo mudou. E a forma como as marcas se conectam com as pessoas também precisa mudar.
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
                  O maior risco não é a mudança. É mudar na direção errada. Enquanto algumas organizações ignoram transformações importantes, outras abandonam sua identidade para seguir tendências passageiras.
                </p>
                <p className="text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                  Nos dois casos, o resultado é o mesmo: perda de relevância. O problema nunca foi prever o futuro — sempre foi interpretar corretamente o presente.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/images/cupula-jardim.jpg" alt="Cúpula de vidro e vegetação sobre uma estrutura arquitetônica, simbolizando infraestrutura estratégica" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/95" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Relevância não acontece por acaso. É infraestrutura.
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Somos uma infraestrutura estratégica de relevância que transforma inteligência cultural em decisões capazes de ampliar:
                </p>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-3">
                {ampliamos.map((item, index) => <motion.span key={item} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.06
              }} className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                    {item}
                  </motion.span>)}
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Nossas frentes de atuação
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Seis competências que se conectam e se potencializam. Um único objetivo: construir relevância.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {frentes.map((item, index) => <motion.div key={item.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.08
              }} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>)}
              </div>

              <div className="text-center mt-12">
                <Link to="/solucoes">
                  <Button size="lg" variant="outline" className="group">
                    Conhecer todas as soluções
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
                <p className="text-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
                  Framework proprietário
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  De sinais a resultados mensuráveis
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Nossa metodologia própria para transformar sinais em estratégia, estratégia em experiência e experiência em valor.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {framework.map((item, index) => <motion.div key={item.step} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.08
              }} className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-base font-bold mb-1 tracking-wide uppercase">
                      {item.step}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>)}
              </div>
            </div>
          </section>

          <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/images/silhueta-por-do-sol.jpg" alt="Silhueta observando o pôr do sol sobre a cidade" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021A13]/95 via-[#021A13]/75 to-[#021A13]/65" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white" style={{
                letterSpacing: '-0.02em'
              }}>
                  Vamos construir relevância juntos?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Estamos prontos para conectar inteligência, cultura e estratégia ao que mais importa: pessoas e impacto.
                </p>
                <Link to="/contato">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]">
                    Entrar em contato
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default HomePage;
