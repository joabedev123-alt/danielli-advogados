import Link from 'next/link';

export const metadata = {
  title: 'Conteúdos - Danielli Geovani Advogados',
  description: 'Informação jurídica também é uma forma de proteção. Artigos sobre direito em Portugal e no Brasil.',
};

export default function Conteudos() {
  const articles = [
    { title: 'Os principais desafios da dupla tributação entre Brasil e Portugal', category: 'Portugal & Brasil', date: 'Em breve', excerpt: 'Compreenda as regras aplicáveis a rendimentos obtidos nos dois países.' },
    { title: 'Divórcio internacional: qual legislação se aplica?', category: 'Família', date: 'Em breve', excerpt: 'Uma análise sobre os critérios de competência e lei aplicável quando os cônjuges residem em países diferentes.' },
    { title: 'Novas regras para autorização de residência CPLP', category: 'Migrações', date: 'Em breve', excerpt: 'O que mudou nos procedimentos de regularização documental para cidadãos brasileiros em Portugal.' },
    { title: 'Cuidados essenciais na compra de imóvel em Portugal', category: 'Imóveis', date: 'Em breve', excerpt: 'Passos fundamentais para garantir a segurança jurídica na aquisição de patrimônio imobiliário.' },
    { title: 'Constituição de sociedade unipessoal por quotas', category: 'Empresas', date: 'Em breve', excerpt: 'Vantagens e procedimentos legais para iniciar uma atividade empresarial individual.' },
    { title: 'Direitos do trabalhador em caso de acidente laboral', category: 'Trabalho', date: 'Em breve', excerpt: 'Conheça os procedimentos e direitos de indemnização aplicáveis em caso de sinistro.' },
  ];

  const categories = ['Todas', 'Portugal', 'Brasil', 'Migrações', 'Direito Civil', 'Família', 'Trabalho', 'Empresas', 'Imóveis'];

  return (
    <>
      <section style={{ backgroundColor: 'var(--color-navy-black)', padding: 'var(--space-24) 0 var(--space-12)', color: 'var(--color-off-white)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>
            Conteúdos Jurídicos
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(250,249,246,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Informação clara e atualizada para decisões mais seguras.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-12) 0', backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className="btn" 
                style={{ 
                  backgroundColor: idx === 0 ? 'var(--color-navy-black)' : 'transparent', 
                  color: idx === 0 ? 'var(--color-off-white)' : 'var(--color-navy-black)',
                  border: '1px solid var(--color-navy-black)',
                  padding: 'var(--space-2) var(--space-4)',
                  fontSize: '0.85rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 'var(--space-8)' }}>
            {articles.map((article, index) => (
              <article key={index} style={{ backgroundColor: 'var(--color-off-white)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(7,17,31,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 'var(--space-6)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '500' }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(7,17,31,0.5)' }}>
                      {article.date}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-3)', color: 'var(--color-navy-black)' }}>
                    {article.title}
                  </h2>
                  <p style={{ color: 'rgba(7,17,31,0.7)', fontSize: '0.95rem', marginBottom: 'var(--space-5)', flexGrow: 1 }}>
                    {article.excerpt}
                  </p>
                  <Link href="#" style={{ color: 'var(--color-navy-black)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', borderBottom: '1px solid var(--color-champagne-gold)', paddingBottom: '2px', display: 'inline-block', width: 'fit-content' }}>
                    Ler artigo completo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
