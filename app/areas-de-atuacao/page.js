import Link from 'next/link';

export const metadata = {
  title: 'Áreas de Atuação - Danielli Geovani Advogados',
  description: 'Soluções jurídicas desenvolvidas a partir da análise individual de cada situação.',
};

export default function AreasDeAtuacao() {
  const areas = [
    { title: 'Direito Civil e Família', desc: 'Arrendamento, condomínios, divórcio, partilhas e testamentos.', href: '/areas/civil-e-familia' },
    { title: 'Direito do Trabalho', desc: 'Contratos, ações disciplinares, acidentes de trabalho e acompanhamento.', href: '/areas/direito-do-trabalho' },
    { title: 'Direito Penal', desc: 'Acompanhamento de processos, recursos judiciais e coimas.', href: '/areas/direito-penal' },
    { title: 'Direito das Migrações', desc: 'Autorização de residência, nacionalidade e vistos.', href: '/areas/migracoes' },
    { title: 'Comercial e Empresarial', desc: 'Assessoria a empresas, constituição e contratos comerciais.', href: '/areas/direito-comercial' },
    { title: 'Registo e Notariado', desc: 'Autenticação documental, procurações e registos.', href: '/areas/registo-e-notariado' },
    { title: 'Apoio Documental', desc: 'NIF, NISS, abertura de atividade, declarações e agendamentos.', href: '/areas/apoio-documental' },
  ];

  return (
    <>
      <section style={{ backgroundColor: 'var(--color-navy-black)', padding: 'var(--space-24) 0 var(--space-12)', color: 'var(--color-off-white)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>
            Áreas de Atuação
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(250,249,246,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Soluções jurídicas desenvolvidas a partir da análise individual de cada situação.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)' }}>
            {areas.map((area, index) => (
              <div key={index} style={{ backgroundColor: 'var(--color-warm-ivory)', padding: 'var(--space-8)', borderRadius: 'var(--radius-sm)', borderTop: '3px solid var(--color-champagne-gold)' }}>
                <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-3)' }}>{area.title}</h2>
                <p style={{ color: 'rgba(7,17,31,0.7)', fontSize: '1.05rem', marginBottom: 'var(--space-6)', lineHeight: '1.6' }}>{area.desc}</p>
                <Link href={area.href} className="btn btn-outline">
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
