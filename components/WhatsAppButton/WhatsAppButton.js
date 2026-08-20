'use client';

import { useState, useEffect } from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button with a slight delay for smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Message encoded for URL
  const message = encodeURIComponent("Olá. Encontrei o contacto através do website da Danielli Geovani Advogados Associados e gostaria de solicitar informações sobre atendimento.");
  const whatsappUrl = `https://wa.me/351927317471?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.whatsappButton} ${isVisible ? styles.visible : ''}`}
      aria-label="Contactar via WhatsApp"
      title="WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
