import Link from 'next/link';
import { areas, supportServices } from '@/data/areas';

export const metadata = {
  title: 'Áreas de Atuação - Danielli Geovani Advogados',
  description: 'Soluções jurídicas desenvolvidas a partir da análise individual de cada situação.',
};

export default function AreasDeAtuacao() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--color-navy-black)', padding: 'var(--space-24) 0 var(--space-12)', color: 'var(--color-off-white)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-hero-title" style={{ fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>
            Áreas de Atuação
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(250,249,246,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Soluções jurídicas desenvolvidas a partir da análise individual de cada situação.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div className="grid-cards">
            {areas.map((area) => (
              <div key={area.slug} style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--space-8)', borderRadius: 'var(--radius-sm)', borderTop: '3px solid var(--color-champagne-gold)', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-3)' }}>{area.title}</h2>
                <p style={{ color: 'rgba(7,17,31,0.7)', fontSize: '1.05rem', marginBottom: 'var(--space-5)', lineHeight: '1.6' }}>{area.shortDesc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-6) 0', flexGrow: 1 }}>
                  {area.keyServices.map((service, index) => (
                    <li key={index} style={{ marginBottom: 'var(--space-2)', paddingLeft: 'var(--space-4)', position: 'relative', fontSize: '0.95rem', color: 'rgba(7,17,31,0.8)' }}>
                      <i className="bi bi-check2" style={{ position: 'absolute', left: 0, color: 'var(--color-champagne-gold)' }}></i>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link href={`/areas/${area.slug}`} className="btn btn-outline">
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 var(--space-16)', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-navy-black)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-8)', display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-6)' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-off-white)', marginBottom: 'var(--space-3)' }}>
                {supportServices.title}
              </h2>
              <p style={{ color: 'rgba(250,249,246,0.75)', fontSize: '1rem', marginBottom: 'var(--space-5)', maxWidth: '640px' }}>
                {supportServices.shortDesc}
              </p>
              <Link href={`/areas/${supportServices.slug}`} style={{ color: 'var(--color-champagne-gold)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: '500' }}>
                Saiba mais <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
