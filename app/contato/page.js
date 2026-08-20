import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contato - Danielli Geovani Advogados',
  description: 'Encontre os canais disponíveis para informações sobre atendimento e serviços jurídicos.',
};

export default function Contato() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--color-navy-black)', padding: 'var(--space-24) 0 var(--space-12)', color: 'var(--color-off-white)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>
            Contacto
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(250,249,246,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Encontre os canais disponíveis para informações sobre atendimento e serviços jurídicos.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
              
              {/* Coluna Esquerda - Info */}
              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-navy-black)', marginBottom: 'var(--space-6)' }}>
                  Informações de Contacto
                </h2>
                
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <i className="bi bi-whatsapp" style={{ color: 'var(--color-champagne-gold)', fontSize: '1.5rem', marginTop: '4px' }}></i>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-1)' }}>WhatsApp</h3>
                      <p style={{ color: 'rgba(7,17,31,0.7)', fontSize: '1rem' }}>+351 927 317 471</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <i className="bi bi-geo-alt" style={{ color: 'var(--color-champagne-gold)', fontSize: '1.5rem', marginTop: '4px' }}></i>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-1)' }}>Atendimento</h3>
                      <p style={{ color: 'rgba(7,17,31,0.7)', fontSize: '1rem' }}>Portugal e Brasil</p>
                      <p style={{ color: 'rgba(7,17,31,0.5)', fontSize: '0.85rem' }}>(Endereço completo a ser disponibilizado)</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <i className="bi bi-clock" style={{ color: 'var(--color-champagne-gold)', fontSize: '1.5rem', marginTop: '4px' }}></i>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-1)' }}>Horário</h3>
                      <p style={{ color: 'rgba(7,17,31,0.7)', fontSize: '1rem' }}>(Horário a ser disponibilizado)</p>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(7,17,31,0.1)', paddingTop: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-4)' }}>Redes Sociais</h3>
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <a href="https://instagram.com/danielligeovaniadvogada" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://youtube.com/@PortugalcomDanielli" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Formulário */}
              <div>
                <ContactForm />
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
