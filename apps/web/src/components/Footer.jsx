import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
function Footer() {
  const socialLinks = [{
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/syntho-co/'
  }, {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/syntho.co/'
  }];
  return <footer className="bg-muted text-muted-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img src="https://raw.githubusercontent.com/GIZIDORIO/SYNTHO/main/apps/web/public/logo/syntho-icon-green.png" alt="" className="h-7 w-auto" />
              <span className="text-2xl font-bold text-foreground tracking-tight" style={{
              letterSpacing: '-0.02em'
            }}>SYNTHO</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-prose">
              Humanizamos marcas, inspiramos pessoas e criamos conexões. Brand Experience e Inteligência Cultural para quem deseja permanecer relevante sem perder sua essência.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Links rápidos
            </span>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary transition-all duration-200">
                Home
              </Link>
              <Link to="/solucoes" className="text-sm hover:text-primary transition-all duration-200">
                Soluções
              </Link>
              <Link to="/cases" className="text-sm hover:text-primary transition-all duration-200">
                Cases
              </Link>
              <Link to="/sobre" className="text-sm hover:text-primary transition-all duration-200">
                Sobre
              </Link>
              <Link to="/contato" className="text-sm hover:text-primary transition-all duration-200">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Contato
            </span>
            <div className="mt-4 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contato@syntho.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+55 11 97620-2568 | +55 47 98828 4818</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-sm">© 2026 SYNTHO LTDA. Todos os direitos reservados.</p>
            <div className="flex gap-3">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-lg bg-muted-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <social.icon className="h-4 w-4" />
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;