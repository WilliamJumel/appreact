import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import GithubProfile from './GithubProfile';

const Footer = () => {
  const githubProfileUrl = 'https://github.com/github-john-doe'; // URL par défaut

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* Intégration du composant GithubProfile */}
          <GithubProfile />
          <ul>
            <li>40 Rue Laure Diebold</li>
            <li>69009 Lyon, France</li>
            <li>Téléphone : 06 20 30 40 50</li>
          </ul>
          <div className="social-icons">
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.indeed.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-indeed"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/realisation">A propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Me contacter</Link></li>
            <li><Link to="/mentions-legales">Mention légales</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><Link to="/realisation">Fresh food</Link></li>
            <li><Link to="/realisation">Restaurant Akira</Link></li>
            <li><Link to="/realisation">Espace bien-etre</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mes derniers articles</h3>
          <ul>
            <li><Link to="/blog">Coder son site en HTML / CSS</Link></li>
            <li><Link to="/blog">Vendre ses produits sur le web</Link></li>
            <li><Link to="/blog">Se positionner sur Google</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;