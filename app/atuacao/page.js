import Link from 'next/link';

export const metadata = {
  title: 'Atuação & Experiência - Danielli Geovani Advogados',
  description: 'Experiência aplicada a situações reais. Conheça as áreas de atuação prática do escritório.',
};

export default function AtuacaoExperiencia() {
  const experiences = [
    {
      title: 'Família e Sucessões',
      desc: 'Orientação em situações familiares e patrimoniais que exigem análise cuidadosa e abordagem individualizada, desde o aconselhamento prévio até a condução de processos de divórcio, regulação de responsabilidades parentais e inventários.'
    },
    {
      title: 'Mobilidade Internacional',
      desc: 'Acompanhamento de procedimentos jurídicos e documentais relacionados à vida entre países, auxiliando clientes nas exigências legais para obtenção de vistos, autorizações de residência e processos de nacionalidade em Portugal e no Brasil.'
    },
    {
      title: 'Empresas',
      desc: 'Apoio jurídico contínuo a pequenas e médias empresas, englobando a constituição e organização societária, revisão de contratos comerciais, e acompanhamento da atividade empresarial para garantir conformidade legal.'
    },
    {
      title: 'Imóveis e Registos',
      desc: 'Orientação técnica e acompanhamento em procedimentos relacionados a transações imobiliárias, preparação e acompanhamento de escrituras, e diferentes modalidades de registos prediais e comerciais.'
    },
    {
      title: 'Relações Laborais',
      desc: 'Aconselhamento jurídico para trabalhadores e empregadores, elaboração de contratos de trabalho, acompanhamento de processos disciplinares e suporte em casos de acidentes laborais.'
    }
  ];

  return (
    <>
      <section style={{ backgroundColor: 'var(--color-navy-black)', padding: 'var(--space-24) 0 var(--space-12)', color: 'var(--color-off-white)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-hero-title" style={{ fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>
            Atuação & Experiência
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(250,249,246,0.8)', maxWidth: '700px', margin: '0 auto' }}>
            Experiência técnica aplicada a situações reais, com acompanhamento rigoroso e estratégico.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ marginBottom: 'var(--space-12)', paddingBottom: 'var(--space-8)', borderBottom: index < experiences.length - 1 ? '1px solid rgba(198,164,106,0.3)' : 'none' }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-navy-black)', marginBottom: 'var(--space-4)' }}>
                  {exp.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(7,17,31,0.8)', lineHeight: '1.8' }}>
                  {exp.desc}
                </p>
              </div>
            ))}

            <div style={{ marginTop: 'var(--space-16)', padding: 'var(--space-8)', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Necessita de orientação em alguma destas áreas?</h3>
              <p style={{ marginBottom: 'var(--space-6)', color: 'rgba(7,17,31,0.7)' }}>
                Cada caso possui as suas particularidades. Contacte o escritório para uma análise individual da sua situação.
              </p>
              <Link href="/contato" className="btn btn-navy" style={{ backgroundColor: 'var(--color-navy-black)', color: 'var(--color-off-white)' }}>
                Contactar o Escritório
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
