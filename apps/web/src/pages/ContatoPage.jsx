import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function ContatoPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@syntho.com.br',
      href: 'mailto:contato@syntho.com.br'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 11 97620 2568 | +55 47 98828 4818',
      href: 'tel:+5511976202568'
    },
    {
      icon: MapPin,
      label: 'Alameda Santos, Jardins',
      value: 'São Paulo, Brasil',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/syntho-co/'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/syntho.co/'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - SYNTHO</title>
        <meta name="description" content="Entre em contato com a SYNTHO para discutir como podemos transformar sua marca através de estratégia cultural." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Vamos conversar
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Estamos prontos para ajudar sua marca a se conectar com o que realmente importa.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-semibold mb-6 leading-snug">
                        Envie uma mensagem
                      </h2>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 leading-snug">
                      Informações de contato
                    </h2>
                    <div className="space-y-4">
                      {contactInfo.map((info) => (
                        <div key={info.label} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-lg hover:text-primary transition-all duration-200"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-lg">{info.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 leading-snug">
                      Redes sociais
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-2 leading-snug flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Prefere WhatsApp?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fale diretamente com a nossa equipe e conte sobre seu desafio.
                    </p>
                    <a href="https://wa.me/5547988284818" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Chamar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContatoPage;