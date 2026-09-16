import Link from 'next/link';
import Image from 'next/image';
import { getAreaBySlug } from '@/data/areas';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getAreaBySlug(slug) || { title: 'Área de Atuação', intro: '' };

  return {
    title: `${area.title} - Danielli Geovani Advogados`,
    description: area.intro,
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = getAreaBySlug(slug) || { title: 'Área de Atuação', intro: 'Descrição da área', fullServices: [] };

  return (
    <>
      <section style={{ position: 'relative', height: '40vh', minHeight: '300px', backgroundColor: 'var(--color-navy-black)', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: '0.4' }}>
          <Image src="/images/hero.jpg" alt={area.title} fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/areas-de-atuacao" style={{ color: 'var(--color-champagne-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-4)' }}>
            <i className="bi bi-arrow-left"></i> Voltar para Áreas
          </Link>
          <h1 style={{ color: 'var(--color-off-white)', fontSize: 'clamp(1.9rem, 6vw, 3rem)', fontFamily: 'var(--font-serif)' }}>{area.title}</h1>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Sobre esta área</h2>
            <p style={{ color: 'rgba(7,17,31,0.8)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-8)' }}>
              {area.intro}
            </p>

            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Atuação em</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
              {area.fullServices.map((service, index) => (
                <li key={index} style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <i className="bi bi-check2" style={{ position: 'absolute', left: 0, color: 'var(--color-champagne-gold)', fontSize: '1.2rem' }}></i>
                  <strong style={{ fontWeight: 600 }}>{service}</strong>
                </li>
              ))}
            </ul>

            <div style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-warm-ivory)', borderLeft: '4px solid var(--color-champagne-gold)', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-2)', color: 'var(--color-navy-black)' }}>Aviso Legal</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(7,17,31,0.7)', margin: 0 }}>
                O conteúdo apresentado possui caráter informativo e não substitui uma análise jurídica individual da situação.
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-8)' }}>
              <Link href="/contato" className="btn btn-navy" style={{ backgroundColor: 'var(--color-navy-black)', color: 'var(--color-off-white)' }}>
                Solicitar informações sobre esta área
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
