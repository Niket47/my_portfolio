'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, FolderKanban, Mail, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true, icon: Home },
    { name: 'About', href: '#about', isRoute: false, icon: User },
    { name: 'Experience', href: '#experience', isRoute: false, icon: Briefcase },
    { name: 'Projects', href: '/projects', isRoute: true, icon: FolderKanban },
    { name: 'Contact', href: '#contact', isRoute: false, icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    if (pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 border-b border-black/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center relative">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => {
                const Icon = item.icon;
                return item.isRoute ? (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="text-black/60 hover:text-black transition-colors font-medium tracking-tight text-sm uppercase flex items-center gap-2"
                  >
                    {item.name === 'Home' && <Icon size={18} />}
                    {item.name !== 'Home' && item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-black/60 hover:text-black transition-colors font-medium tracking-tight text-sm uppercase"
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden absolute right-0 text-black p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-[90] md:hidden"
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-[110] shadow-xl md:hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-6 border-b border-black/10">
              <span className="text-lg font-bold font-sans uppercase tracking-widest">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-black">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 px-6 py-8">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return item.isRoute ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 text-black/60 hover:text-black transition-colors group"
                    >
                      <Icon size={20} />
                      <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-4 text-black/60 hover:text-black transition-colors group text-left"
                    >
                      <Icon size={20} />
                      <span className="text-lg font-medium">{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
            
            <div className="p-6 border-t border-black/10 text-center">
              <p className="text-xs text-black/40 font-mono">© {new Date().getFullYear()} Rushant Golakiya</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
