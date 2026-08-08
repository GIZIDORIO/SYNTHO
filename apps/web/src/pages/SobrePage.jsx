import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Eye, Users, ShieldCheck, MessagesSquare, Fingerprint, Leaf } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';

function SobrePage() {
  const filosofia = ['Compreender culturas', 'Conectar pessoas', 'Criar futuros', 'Transformar realidades'];

  const comoPensamos = [{
    icon: Users,
    title: 'Pessoas',
    description: 'Acreditamos que toda transformação começa nas pessoas.'
  }, {
    icon: MessagesSquare,
    title: 'Significado',
    description: 'Acreditamos que vínculos devem permanecer na memória e gerar impacto.'
  }, {
    icon: Fingerprint,
    title: 'Essência',
    description: 'Acreditamos que a verdadeira evolução preserva a identidade.'
  }, {
    icon: Eye,
    title: 'Inteligência Cultural',
    description: 'Acreditamos que compreender sempre vem antes de transformar.'
  }, {
    icon: ShieldCheck,
    title: 'Integridade',
    description: 'Acreditamos que confiança se constrói pela coerência entre discurso, decisões e atitudes.'
  }, {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Acreditamos em um desenvolvimento que respeita pessoas, culturas, comunidades e o planeta.'
  }];

  const team = [{
    name: 'Grazieli Izidorio',
    role: 'Head de Projetos & Operações Estratégicas',
    initials: 'GI',
    color: 'bg-primary/20'
  }, {
    name: 'Murilo Durigan',
    role: 'Head de Cultura & Brand Experience',
    initials: 'MD',
    color: 'bg-secondary/20'
  }, {
    name: 'Claudio Beltrami',
    role: 'Head de Relacionamento & Hospitalidade',
    initials: 'CB',
    color: 'bg-muted-foreground/20'
  }];

  return <>
      <Helmet>
        <title>Sobre - SYNTHO</title>
        <meta name="description" content="Conheça a SYNTHO, nossa missão de transformar a relação entre marcas e pessoas, nossa filosofia e a equipe por trás dos projetos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Sobre a SYNTHO
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Somos uma infraestrutura estratégica de relevância que transforma inteligência cultural em decisões de marca — integrando branding, pesquisa, experiência, comunidade, estratégia e tendência em um único sistema.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
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
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                    Nossa missão
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformar a relação entre marcas e pessoas em algo profundamente humano, onde cada experiência tenha o poder de inspirar, conectar e resistir ao tempo.
                  </p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.1
              }}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                    Nossa visão
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser a principal referência em inteligência humana e cultural, construindo um futuro onde marcas preservem sua essência, acompanhem transformações e evoluam com autenticidade.
                  </p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                    Nossa filosofia
                  </h2>
                  <ul className="space-y-3">
                    {filosofia.map((item) => <li key={item} className="flex items-center gap-3 text-lg text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>)}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
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
            }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Como pensamos
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Seis princípios que orientam cada decisão e cada projeto.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {comoPensamos.map((value, index) => <motion.div key={value.title} initial={{
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
              }}>
                    <Card className="h-full border-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 leading-snug">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
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
            }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Nossa equipe
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Profissionais apaixonados por cultura, estratégia e criatividade.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {team.map((member, index) => <motion.div key={member.name} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="text-center">
                    <div className={`w-24 h-24 rounded-xl ${member.color} flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-2xl font-bold text-foreground">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </motion.div>)}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default SobrePage;
