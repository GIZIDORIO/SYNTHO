import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ear, Target, ListChecks, Rocket, BarChart3, Zap, RefreshCw, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function CasesPage() {
  const caseColunas = [{
    label: 'Antes',
    heading: 'Uma tradição relevante, com estrutura limitada.',
    items: ['Administração informal e amadora', 'Ausência de gestão estruturada de comunidade', 'Comunicação pouco ativa e fragmentada', 'Redes sociais sem planejamento', 'Processos internos amadores', 'Percepção de manifestação parada no tempo']
  }, {
    label: 'Atuação SYNTHO',
    heading: 'Reposicionar sem descaracterizar essência.',
    items: ['Atualização da identidade institucional', 'Ativação estratégica das redes sociais', 'Estruturação da gestão de comunidade', 'Brand Experience', 'Atualização de narrativas e conteúdos', 'Ampliação da percepção cultural e institucional']
  }, {
    label: 'Em curso',
    heading: 'Transformar em plataforma cultural sustentável.',
    items: ['Atualização dos processos internos, novo Estatuto Social, Regimento Interno e Código de Ética', 'Criação de projetos culturais e experiências paralelas', 'Estruturação para leis de incentivo e captação de recursos', 'Modernização da gestão e operação', 'Desenvolvimento de estrutura profissional, sustentável e preparada para o futuro']
  }];

  const comoTrabalhamos = [{
    icon: Ear,
    title: 'Escuta profunda e diagnóstico'
  }, {
    icon: Target,
    title: 'Estratégia personalizada'
  }, {
    icon: ListChecks,
    title: 'Planejamento e priorização'
  }, {
    icon: Rocket,
    title: 'Execução integrada'
  }, {
    icon: BarChart3,
    title: 'Mensuração e evolução'
  }];

  const modelos = [{
    icon: Zap,
    title: 'Projetos pontuais',
    description: 'Escopo definido, entrega objetiva, para desafios específicos.'
  }, {
    icon: RefreshCw,
    title: 'Acompanhamento contínuo',
    description: 'Suporte estratégico recorrente para evoluir com consistência.'
  }, {
    icon: Handshake,
    title: 'Parceria estratégica de longo prazo',
    description: 'Imersão total na marca, construindo relevância ao longo do tempo.'
  }];

  return (
    <>
      <Helmet>
        <title>Cases - SYNTHO</title>
        <meta name="description" content="Conheça o case Cavalhadas da Franca e como a SYNTHO trabalha para transformar inteligência cultural em relevância de marca." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <section className="py-20 md:py-28 bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Cases
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Como transformamos inteligência cultural e execução criativa em relevância real para marcas e instituições.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://raw.githubusercontent.com/GIZIDORIO/SYNTHO/main/apps/web/public/images/colunas-classicas.jpg" alt="Arquitetura clássica remetendo à tradição secular das Cavalhadas da Franca" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/95" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14"
              >
                <p className="text-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Case</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Cavalhadas da Franca
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  Manifestação cultural equestre realizada em Franca/SP desde 1831, que transforma história, tradição e pertencimento em uma experiência coletiva.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseColunas.map((coluna, index) => (
                  <motion.div
                    key={coluna.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 flex flex-col"
                  >
                    <span className="inline-block w-fit text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                      {coluna.label}
                    </span>
                    <h3 className="text-lg font-semibold mb-4 leading-snug">
                      {coluna.heading}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {coluna.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Como trabalhamos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Um processo colaborativo, transparente e focado em resultados. Metodologia, método e parceria em cada etapa.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {comoTrabalhamos.map((etapa, index) => (
                  <motion.div
                    key={etapa.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <etapa.icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-sm font-medium leading-snug">{etapa.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Modelo de relacionamento
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Parcerias flexíveis para diferentes necessidades e momentos. Escolhemos o melhor formato para gerar o maior impacto.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {modelos.map((modelo, index) => (
                  <motion.div
                    key={modelo.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <modelo.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 leading-snug">{modelo.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{modelo.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted text-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Seu projeto pode ser o próximo case
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Vamos alinhar desafios e objetivos, diagnosticar oportunidades e construir juntos um plano de ação.
                </p>
                <Link to="/contato">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Iniciar uma conversa
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CasesPage;
