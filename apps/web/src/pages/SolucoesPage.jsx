import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Fingerprint, Sparkles, Eye, Landmark, Users, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function SolucoesPage() {
  const solucoes = [{
    number: '01',
    icon: Fingerprint,
    title: 'Brand Management',
    tagline: 'Gestão estratégica de marca para construir, preservar e expandir valor.',
    items: ['Posicionamento e propósito', 'Arquitetura da marca', 'Identidade verbal e visual', 'Brand governance', 'Comunicação estratégica', 'Employer branding'],
    image: '/images/colunas-classicas.jpg',
    alt: 'Colunas clássicas de uma fachada, remetendo a solidez e identidade de marca'
  }, {
    number: '02',
    icon: Sparkles,
    title: 'Brand Experience',
    tagline: 'Experiências que transformam estratégia em conexão real e memorável.',
    items: ['Eventos corporativos e culturais', 'Congressos e convenções', 'Lançamentos e ativações', 'Experience design', 'Hospitalidade e programas', 'Experiências imersivas'],
    image: '/images/roda-gigante-1.jpg',
    alt: 'Roda-gigante em tons de verde-água, remetendo a experiências memoráveis'
  }, {
    number: '03',
    icon: Eye,
    title: 'Cultural Intelligence',
    tagline: 'Inteligência cultural para interpretar comportamentos e antecipar o futuro.',
    items: ['Pesquisas e escutas ativas', 'Análise de tendências', 'Coolhunting e social listening', 'Mapeamento cultural', 'Sinais fracos e cenários', 'Insights aplicados ao negócio'],
    image: '/images/abstrato-rocha-verde.jpg',
    alt: 'Rocha escura envolta em luz verde emergindo da escuridão, remetendo a sinais fracos e cenários'
  }, {
    number: '04',
    icon: Landmark,
    title: 'Projetos Culturais',
    tagline: 'Estruturamento de projetos e conexão de ideias a recursos e parceiros.',
    items: ['Leis de incentivo e editais', 'Patrocínios e parcerias', 'Projetos culturais, esportivos e sociais', 'Projetos regenerativos, ESG e impacto socioambiental', 'Prestação de contas'],
    image: '/images/estrada-floresta.jpg',
    alt: 'Estrada iluminada atravessando uma floresta, remetendo a um caminho estruturado até um objetivo'
  }, {
    number: '05',
    icon: Users,
    title: 'Gestão de Comunidades',
    tagline: 'Construção, ativação e fortalecimento de comunidades para gerar valor contínuo.',
    items: ['Comunidades internas e externas', 'Programas de relacionamento', 'Clubes e associações', 'Embaixadores e influenciadores', 'Plataformas e engajamento', 'Governança de comunidades'],
    image: '/images/homem-agua-sorriso.jpg',
    alt: 'Pessoa sorrindo sob gotas de água, remetendo a conexões humanas genuínas'
  }, {
    number: '06',
    icon: Compass,
    title: 'Consultoria Contínua',
    tagline: 'Acompanhamento estratégico para evoluir com consistência.',
    items: ['Diagnóstico e planejamento', 'Roadmap de iniciativas', 'Governança e KPIs', 'Mentoria e advisory', 'Acompanhamento contínuo', 'Suporte à tomada de decisão'],
    image: '/images/escadaria-luz-2.jpg',
    alt: 'Escadaria em espiral iluminada, remetendo a acompanhamento e direção contínua'
  }];

  return (
    <>
      <Helmet>
        <title>Soluções - SYNTHO</title>
        <meta name="description" content="Conheça as seis frentes de atuação da SYNTHO: Brand Management, Brand Experience, Cultural Intelligence, Projetos Culturais, Gestão de Comunidades e Consultoria Contínua." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Nossas soluções
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seis competências que se conectam e se potencializam. Um único objetivo: construir relevância. Integramos tudo em um único sistema — branding, pesquisa, experiência, comunidade, estratégia, tendência e inteligência cultural.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-8">
            {solucoes.map((solucao, index) => (
              <div key={solucao.title} className={index % 2 === 0 ? 'bg-background' : 'bg-muted'}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                    >
                      <img src={solucao.image} alt={solucao.alt} className="w-full h-full object-cover" loading="lazy" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-bold text-secondary tracking-widest">{solucao.number}</span>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <solucao.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug" style={{ letterSpacing: '-0.02em' }}>
                        {solucao.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {solucao.tagline}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {solucao.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="py-20 bg-background border-t border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Tudo o que fazemos trabalha junto
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Cada frente fortalece as outras. Esse é o poder da SYNTHO.
                </p>
                <Link to="/contato">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Vamos conversar sobre seu desafio
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

export default SolucoesPage;
