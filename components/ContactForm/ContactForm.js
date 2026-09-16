'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      e.target.reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Nome Completo</label>
        <input type="text" id="name" name="name" className={styles.input} required />
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Telefone / WhatsApp</label>
          <input type="tel" id="phone" name="phone" className={styles.input} required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="country" className={styles.label}>País</label>
          <select id="country" name="country" className={styles.input} required defaultValue="">
            <option value="" disabled>Selecione um país</option>
            <option value="portugal">Portugal</option>
            <option value="brasil">Brasil</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="area" className={styles.label}>Área de Interesse</label>
          <select id="area" name="area" className={styles.input} required defaultValue="">
            <option value="" disabled>Selecione uma área</option>
            <option value="migracoes">Direito das Migrações e Nacionalidade</option>
            <option value="civil">Direito Civil, Família e Sucessões</option>
            <option value="trabalho">Direito do Trabalho</option>
            <option value="penal">Direito Penal e Contraordenacional</option>
            <option value="empresarial">Direito Comercial e Societário</option>
            <option value="registos">Registos e Notariado</option>
            <option value="imobiliario">Direito Imobiliário</option>
            <option value="documental">Diligências e Serviços Jurídico-Administrativos</option>
            <option value="outra">Outro assunto</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Mensagem</label>
        <textarea id="message" name="message" rows="5" className={styles.textarea} required></textarea>
      </div>

      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="privacy" name="privacy" required className={styles.checkbox} />
        <label htmlFor="privacy" className={styles.checkboxLabel}>
          Compreendo e aceito a Política de Privacidade. Tenho ciência de que o envio deste formulário não constitui automaticamente uma relação advogado-cliente.
        </label>
      </div>

      <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
        {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
      </button>

      {isSuccess && (
        <div className={styles.successMessage}>
          A sua mensagem foi enviada com sucesso. Entraremos em contacto brevemente.
        </div>
      )}
    </form>
  );
}
