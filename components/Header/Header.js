'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Áreas de Atuação', href: '/areas-de-atuacao' },
    { name: 'Atuação', href: '/atuacao' },
    { name: 'Conteúdos', href: '/conteudos' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo-01.png" 
              alt="Danielli Geovani Advogados Associados" 
              width={240} 
              height={75} 
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className={styles.actions}>
            <Link href="/contato" className="btn btn-gold" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
              Agendar Consulta
            </Link>
            <button 
              className={styles.hamburger} 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            <Image 
              src="/images/logo-01.png" 
              alt="Danielli Geovani" 
              width={180} 
              height={56} 
              style={{ objectFit: 'contain' }}
            />
          </span>
          <button 
            className={styles.closeBtn} 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className={styles.mobileFooter}>
          <Link href="/contato" className="btn btn-gold" style={{ width: '100%', marginBottom: 'var(--space-4)' }} onClick={() => setIsMobileMenuOpen(false)}>
            Fale Conosco
          </Link>
          
          <div className={styles.socialLinks}>
            <a href="https://wa.me/351927317471" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://instagram.com/danielligeovaniadvogada" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://youtube.com/@PortugalcomDanielli" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
          
          <p className={styles.drawerContact}>+351 927 317 471</p>
          <p className={styles.drawerContact}>Portugal • Brasil</p>
        </div>
      </div>
    </>
  );
}
