import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ASSET_BASE } from '@/lib/cdn.js';
function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/solucoes',
    label: 'Soluções'
  }, {
    path: '/cases',
    label: 'Cases'
  }, {
    path: '/sobre',
    label: 'Sobre'
  }, {
    path: '/contato',
    label: 'Contato'
  }];
  const isActive = path => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${ASSET_BASE}/logo/syntho-icon-green.png`} alt="" className="h-8 w-auto" />
            <span className="text-2xl font-bold tracking-tight" style={{
            letterSpacing: "-0.02em"
          }}>SYNTHO</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-all duration-200 relative ${isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                {link.label}
                {isActive(link.path) && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />}
              </Link>)}
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-all duration-200 ${isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                      {link.label}
                    </Link>)}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
}
export default Header;