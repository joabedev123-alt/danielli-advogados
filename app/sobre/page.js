import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Sobre - Danielli Geovani Advogados',
  description: 'Conheça a trajetória e filosofia do escritório Danielli Geovani Advogados Associados.',
};

export default function Sobre() {
  return (
    <>
      {/* Hero Interno */}
      <section className={styles.heroInterno}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero.jpg" 
            alt="Danielli Geovani" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Sobre Danielli Geovani</h1>
        </div>
      </section>

      {/* História / Sobre */}
      <section className={`${styles.section} ${styles.bgOffWhite}`}>
        <div className={`container ${styles.historiaGrid}`}>
          <div>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-5)', fontFamily: 'var(--font-serif)' }}>
              Trajetória e Dedicação
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-champagne-gold)', marginBottom: 'var(--space-5)' }}></div>
            <p style={{ color: 'rgba(7,17,31,0.8)', fontSize: '1.1rem', marginBottom: 'var(--space-4)', lineHeight: '1.8' }}>
              [Inserir aqui a biografia de Danielli Geovani. Este espaço está reservado para apresentar a trajetória profissional após receber as informações verdadeiras. Não preencher com informações inventadas.]
            </p>
            <p style={{ color: 'rgba(7,17,31,0.8)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              [Continuar com detalhes sobre a atuação e a visão da profissional para o mercado jurídico e atendimento aos clientes.]
            </p>
          </div>
          <div className={styles.historiaImage}>
            <Image 
              src="/images/hero.jpg" 
              alt="Retrato Danielli Geovani" 
              fill 
              style={{ objectFit: 'cover', objectPosition: 'center top' }} 
            />
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className={`${styles.section} ${styles.bgIvory}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-champagne-gold)' }}>Nossos Pilares</span>
            <h2 className="section-title" style={{ marginTop: 'var(--space-2)', fontFamily: 'var(--font-serif)' }}>Filosofia de Atuação</h2>
          </div>

          <div className={styles.filosofiaGrid}>
            <div className={styles.filosofiaCard}>
              <h3 className={styles.filosofiaTitle}>Clareza</h3>
              <p className={styles.filosofiaText}>Explicar informações jurídicas de maneira compreensível, sem jargões desnecessários.</p>
            </div>
            <div className={styles.filosofiaCard}>
              <h3 className={styles.filosofiaTitle}>Proximidade</h3>
              <p className={styles.filosofiaText}>Manter comunicação direta e acompanhamento individualizado em todas as etapas.</p>
            </div>
            <div className={styles.filosofiaCard}>
              <h3 className={styles.filosofiaTitle}>Rigor</h3>
              <p className={styles.filosofiaText}>Analisar cada situação com cuidado técnico, garantindo excelência jurídica.</p>
            </div>
            <div className={styles.filosofiaCard}>
              <h3 className={styles.filosofiaTitle}>Responsabilidade</h3>
              <p className={styles.filosofiaText}>Atuar respeitando a legislação e os deveres profissionais, com máxima ética.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Experiência */}
      <section className={`${styles.section} ${styles.bgOffWhite}`}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>Formação e Experiência</h2>
          </div>

          <div className={styles.timeline}>
            {/* Placeholders for actual timeline data */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>[Ano] - Inscrição Profissional</h3>
                <p className={styles.timelineText}>Ordem dos Advogados Portugueses / OAB Brasil. (Aguardando informações reais).</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>[Ano] - Pós-graduações e Especializações</h3>
                <p className={styles.timelineText}>(Aguardando informações reais para preenchimento).</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>[Ano] - Graduação</h3>
                <p className={styles.timelineText}>(Aguardando informações reais da universidade).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portugal e Brasil */}
      <section className={`${styles.section} ${styles.bgIvory}`}>
        <div className={`container`} style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="section-title" style={{ marginBottom: 'var(--space-4)', fontFamily: 'var(--font-serif)' }}>Portugal e Brasil</h2>
          <p style={{ color: 'rgba(7,17,31,0.8)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Compreendemos a complexidade de ter a vida dividida entre dois continentes. Nossa atuação é focada na realidade de clientes com interesses, patrimônio e família tanto em Portugal quanto no Brasil, orientando de forma segura em contextos internacionais.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className={`${styles.section} ${styles.bgOffWhite}`}>
        <div className="container">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Galeria Profissional</h2>
          <div className={styles.galeriaGrid}>
            <div className={styles.galeriaItem}>
              <Image src="/images/portugal.jpg" alt="Galeria 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.galeriaItem}>
              <Image src="/images/hero.jpg" alt="Galeria 2" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.galeriaItem}>
              <Image src="/images/brazil.jpg" alt="Galeria 3" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
