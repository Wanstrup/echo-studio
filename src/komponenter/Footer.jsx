import React from 'react';
import './Footer.css'; // Importer Footer-styling

// Importer billede (uden dark mode skift)
import logo from '../assets/footerlogo.webp';  // Erstat med det billede, du ønsker at vise konstant

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p>Email: kontakt@echostudio.dk</p>
          <p>Telefon: +45 12 34 56 78</p>
          <p>Adresse: Grønnevej 12, 8000 Aarhus C</p>
        </div>
        
        <div className="footer-image">
          <img src={logo} alt="Echo Studio Badge" className="footer-logo" />
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 Echo Studio. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

