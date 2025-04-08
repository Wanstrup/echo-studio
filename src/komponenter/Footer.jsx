import React from 'react';
import './Footer.css'; // Importer Footer-styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Echo Studio. Alle rettigheder forbeholdes.</p>
        <div className="footer-contact">
          <p>Email: kontakt@echostudio.dk</p>
          <p>Telefon: +45 12 34 56 78</p>
          <p>Adresse: Grønnevej 12, 8000 Aarhus C</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
