import Link from 'next/link';
import Image from 'next/image';

// Em um projeto real, estes dados viriam de um CMS ou base de dados.
const areaData = {
  'civil-e-familia': { title: 'Direito Civil e Família', desc: 'Arrendamento, condomínios, responsabilidade civil, divórcio, partilhas, sucessões e testamentos.' },
  'direito-do-trabalho': { title: 'Direito do Trabalho', desc: 'Contratos, ações disciplinares, acidentes de trabalho, impugnação de despedimento.' },
  'direito-penal': { title: 'Direito Penal', desc: 'Acompanhamento de processo-crime, indemnização civil, coimas e multas.' },
  'migracoes': { title: 'Direito das Migrações', desc: 'Autorização de residência, nacionalidade e vistos.' },
  'direito-comercial': { title: 'Comercial e Empresarial', desc: 'Assessoria a empresas, constituição e contratos.' },
  'registo-e-notariado': { title: 'Registo e Notariado', desc: 'Autenticação documental, procurações, escrituras e registos.' },
  'apoio-documental': { title: 'Apoio Documental e Administrativo', desc: 'NIF, NISS, abertura de atividade, declarações.' },
};

// Next.js params
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = areaData[slug] || { title: 'Área de Atuação' };
  
  return {
    title: `${area.title} - Danielli Geovani Advogados`,
    description: area.desc,
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = areaData[slug] || { title: 'Área de Atuação', desc: 'Descrição da área' };

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
          <h1 style={{ color: 'var(--color-off-white)', fontSize: '3rem', fontFamily: 'var(--font-serif)' }}>{area.title}</h1>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Sobre esta área</h2>
            <p style={{ color: 'rgba(7,17,31,0.8)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--space-8)' }}>
              {area.desc}
            </p>
            
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Como podemos ajudar</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
              <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                <i className="bi bi-check2" style={{ position: 'absolute', left: 0, color: 'var(--color-champagne-gold)', fontSize: '1.2rem' }}></i>
                Análise minuciosa da documentação e contexto jurídico.
              </li>
              <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                <i className="bi bi-check2" style={{ position: 'absolute', left: 0, color: 'var(--color-champagne-gold)', fontSize: '1.2rem' }}></i>
                Acompanhamento personalizado em cada fase do processo.
              </li>
              <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                <i className="bi bi-check2" style={{ position: 'absolute', left: 0, color: 'var(--color-champagne-gold)', fontSize: '1.2rem' }}></i>
                Aconselhamento preventivo e resolução de litígios.
              </li>
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
