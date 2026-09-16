import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { areas, supportServices } from '@/data/areas';

export default function Home() {
  return (
    <>
      {/* 01 - HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/images/hero.jpg" 
              alt="Danielli Geovani no escritório" 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>Danielli Geovani Advogados Associados</span>
          <h1 className={styles.heroTitle}>Direito, estratégia e segurança para decisões que importam.</h1>
          <p className={styles.heroText}>
            Atuação jurídica pautada pela proximidade, clareza e análise cuidadosa de cada situação, atendendo clientes com interesses em Portugal e no Brasil.
          </p>
          <div className={styles.heroActions}>
            <Link href="/areas-de-atuacao" className="btn btn-gold">
              Conhecer áreas de atuação
            </Link>
            <Link href="/contato" className="btn btn-outline" style={{ borderColor: 'var(--color-champagne-gold)', color: 'var(--color-champagne-gold)' }}>
              Informações de contacto
            </Link>
          </div>
          <div className={styles.locationIndicator}>
            <span>Portugal</span>
            <span>&bull;</span>
            <span>Brasil</span>
          </div>
        </div>
      </section>

      {/* 02 - INTRODUÇÃO */}
      <section className={styles.introSection}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <span className={styles.introLabel}>Nossa Atuação</span>
            <h2 className={styles.introTitle}>Orientação jurídica com proximidade, rigor e responsabilidade.</h2>
            <div className={styles.goldLine}></div>
            <p className={styles.introText}>
              Cada situação jurídica envolve decisões importantes. Por isso, o trabalho do escritório é desenvolvido com análise individualizada, comunicação clara e acompanhamento próximo em todas as etapas.
            </p>
            <p className={styles.introText} style={{ fontSize: '1rem', color: 'rgba(7,17,31,0.6)' }}>
              Atendimento de pessoas, famílias e empresas em diferentes necessidades jurídicas, preservando a segurança e o rigor técnico que cada contexto exige.
            </p>
          </div>
          <div className={styles.introImage}>
            <Image 
              src="/images/hero.jpg" 
              alt="Trabalho de advocacia" 
              fill 
              style={{ objectFit: 'cover', objectPosition: 'left center' }} 
            />
          </div>
        </div>
      </section>

      {/* 03 - ÁREAS DE ATUAÇÃO */}
      <section className={styles.areasSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>Áreas de Atuação</h2>
            <p style={{ color: 'rgba(7, 17, 31, 0.7)', fontSize: '1.1rem' }}>
              Soluções jurídicas desenvolvidas a partir da análise individual de cada situação.
            </p>
          </div>
          
          <div className={styles.areasGrid}>
            {areas.map((area) => (
              <div key={area.slug} style={{ backgroundColor: 'var(--color-off-white)', padding: 'var(--space-6)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(7,17,31,0.05)', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column' }} className="areaCard">
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>{area.title}</h3>
                <p style={{ color: 'rgba(7, 17, 31, 0.7)', marginBottom: 'var(--space-4)', fontSize: '0.95rem' }}>{area.shortDesc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-5) 0', flexGrow: 1 }}>
                  {area.keyServices.map((service, index) => (
                    <li key={index} style={{ marginBottom: 'var(--space-2)', paddingLeft: 'var(--space-4)', position: 'relative', fontSize: '0.9rem', color: 'rgba(7,17,31,0.75)' }}>
                      <i className="bi bi-check2" style={{ position: 'absolute', left: 0, color: 'var(--color-champagne-gold)' }}></i>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link href={`/areas/${area.slug}`} style={{ color: 'var(--color-champagne-gold)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: '500' }}>
                  Saiba mais <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-10)', backgroundColor: 'var(--color-navy-black)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-8)' }}>
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-off-white)', marginBottom: 'var(--space-3)' }}>
              {supportServices.title}
            </h3>
            <p style={{ color: 'rgba(250,249,246,0.75)', fontSize: '0.95rem', marginBottom: 'var(--space-4)', maxWidth: '640px' }}>
              {supportServices.shortDesc}
            </p>
            <Link href={`/areas/${supportServices.slug}`} style={{ color: 'var(--color-champagne-gold)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: '500' }}>
              Saiba mais <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 - DESTAQUE PORTUGAL + BRASIL */}
      <section className={styles.internationalSection}>
        <div className="container">
          <h2 className={styles.intlTitle}>Entre Portugal e Brasil, orientação jurídica com contexto e proximidade.</h2>
          <p className={styles.intlText}>
            Clientes com interesses, património, família, negócios ou processos entre os dois países frequentemente precisam compreender procedimentos e exigências diferentes.
          </p>
          
          <div className={styles.intlGrid}>
            <div className={styles.intlImageContainer}>
              <Image src="/images/portugal.jpg" alt="Lisboa, Portugal" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: 'var(--space-4)', background: 'linear-gradient(transparent, rgba(7,17,31,0.9))', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--color-off-white)', fontSize: '1.5rem' }}>Portugal</h3>
              </div>
            </div>
            
            <div className={styles.intlConnector}>
              <i className="bi bi-globe"></i>
            </div>
            
            <div className={styles.intlImageContainer}>
              <Image src="/images/brazil.jpg" alt="Brasil" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: 'var(--space-4)', background: 'linear-gradient(transparent, rgba(7,17,31,0.9))', textAlign: 'left' }}>
                <h3 style={{ color: 'var(--color-off-white)', fontSize: '1.5rem' }}>Brasil</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - PROCESSO DE ATENDIMENTO */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ textAlign: 'left', margin: '0' }}>
            <h2 className="section-title">Clareza em cada etapa.</h2>
          </div>
          
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>01</span>
              <h3 className={styles.processStepTitle}>Primeiro contacto</h3>
              <p className={styles.processStepText}>O cliente apresenta a situação e as principais necessidades.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>02</span>
              <h3 className={styles.processStepTitle}>Análise</h3>
              <p className={styles.processStepText}>As informações e documentos são analisados para compreensão do contexto.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>03</span>
              <h3 className={styles.processStepTitle}>Orientação</h3>
              <p className={styles.processStepText}>São apresentadas informações sobre os possíveis caminhos aplicáveis à situação.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>04</span>
              <h3 className={styles.processStepTitle}>Acompanhamento</h3>
              <p className={styles.processStepText}>Quando aplicável, o escritório realiza o acompanhamento jurídico das etapas seguintes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - CTA FINAL */}
      <section className={styles.ctaFinal}>
        <div className={styles.ctaFinalBg}>DG</div>
        <div className={`container ${styles.ctaFinalContent}`}>
          <h2 className={styles.ctaFinalTitle}>Informação clara para decisões mais seguras.</h2>
          <p className={styles.ctaFinalText}>
            Encontre os canais disponíveis para solicitar informações sobre o atendimento e agendar sua consulta.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn btn-outline" style={{ borderColor: 'var(--color-champagne-gold)', color: 'var(--color-champagne-gold)' }}>
              Ver contactos
            </Link>
            <a href="https://wa.me/351927317471" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <i className="bi bi-whatsapp" style={{ marginRight: '8px' }}></i> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
