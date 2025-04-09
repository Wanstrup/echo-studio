import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/echologo.webp';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={darkMode ? 'dark' : 'light'}>
      <nav>
        <Link to="/main" className="logo-link">
          <img src={logo} alt="Logo" className="logo" loading="lazy"/>
        </Link>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          <li><Link to="/hvorforos">Hvorfor os</Link></li>
          <li><Link to="/omos">Om os</Link></li>
          <li><Link to="/book">Book et møde</Link></li>
        </ul>

        {/* Burger menu button */}
        <button className="burger-menu" onClick={toggleMenu} aria-label="Menu">
          ☰
        </button>

        {/* Menu for mobile (slides in) */}
        <div className={`slide-in-menu ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
            &times;
          </button>
          <ul>
            <li><Link to="/hvorforos">Hvorfor os</Link></li>
            <li><Link to="/omos">Om os</Link></li>
            <li><Link to="/book">Book et møde</Link></li>
          </ul>
        </div>

        {/* Dark mode toggle */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;









