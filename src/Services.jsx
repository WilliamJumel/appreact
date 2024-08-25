import React, { useState, useEffect } from 'react';
import './styles.css';
import { FaLaptopCode, FaCode, FaSearch } from 'react-icons/fa';

const Services = () => {
  // Hook pour gérer l'état de l'animation ou de la couleur des icônes
  const [iconStyle, setIconStyle] = useState({
    color: '#333',
    transform: 'scale(1)'
  });

  // Hook pour un effet d'animation des icônes au montage
  useEffect(() => {
    const timer = setTimeout(() => {
      setIconStyle({
        color: '#007bff', // Changer la couleur des icônes après 1 seconde
        transform: 'scale(1.1)', // Agrandir légèrement les icônes
      });
    }, 1000);

    // Cleanup pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="service-header"></div>
      <div className="service-intro">
        <h1>MON OFFRE DE SERVICE</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
      <div className="service-content">
        <div className="service-section">
          <div className="service-icon" style={iconStyle}>
            <FaLaptopCode size={40} />
          </div>
          <h2>UX Design</h2>
          <p>L'UX design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
        </div>
        <div className="service-section">
          <div className="service-icon" style={iconStyle}>
            <FaCode size={40} />
          </div>
          <h2>Développement web</h2>
          <p>Le développement des sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
        </div>
        <div className="service-section">
          <div className="service-icon" style={iconStyle}>
            <FaSearch size={40} />
          </div>
          <h2>Référencement</h2>
          <p>Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;