import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { areas } from '@/data/areas';

const footerLabels = {
  'migracoes': 'Migrações',
  'civil-e-familia': 'Civil e Família',
  'direito-do-trabalho': 'Trabalho',
  'direito-penal': 'Penal',
  'direito-comercial': 'Comercial',
  'registo-e-notariado': 'Registos',
  'direito-imobiliario': 'Imobiliário',
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Column 1: Brand */}
        <div className={styles.footerCol}>
          <Link href="/" className={styles.footerLogo} style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
            <Image 
              src="/images/logo-01.png" 
              alt="Danielli Geovani Advogados Associados" 
              width={260} 
              height={85} 
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <p className={styles.brandText}>
            Clássico na confiança.<br/>
            Contemporâneo na forma de comunicar.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <nav className={styles.footerNav}>
            <Link href="/">Início</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/areas-de-atuacao">Áreas de Atuação</Link>
            <Link href="/atuacao">Atuação</Link>
            <Link href="/conteudos">Conteúdos</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </div>

        {/* Column 3: Practice Areas */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Áreas</h4>
          <nav className={styles.footerNav}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`}>{footerLabels[area.slug] || area.title}</Link>
            ))}
          </nav>
        </div>

        {/* Column 4: Contact & Social */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Contacto</h4>
          <div className={styles.contactInfo}>
            <p><i className="bi bi-whatsapp"></i> +351 927 317 471</p>
            <p><i className="bi bi-geo-alt"></i> Portugal / Brasil</p>
          </div>
          
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
        </div>

      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Danielli Geovani Advogados Associados. Todos os direitos reservados.
            <br />
            Produzida com 💚 por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>CAMALY</a>
          </p>
          <div className={styles.legalLinks}>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/aviso-legal">Aviso Legal</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
