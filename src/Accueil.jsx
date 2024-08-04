import React from 'react';
import './styles.css';

const Accueil = () => {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <a href="#home" className="header-link">
            <h1>JOHN DOE</h1>
          </a>
        </div>
        <nav className="header-right">
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Réalisation</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Me contacter</a></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="header1">
        <div className="overlay">
          <h1>Bienvenue sur notre site</h1>
          <h2>Nous sommes ravis de vous voir ici</h2>
          <a href="#about" className="btn">En savoir plus</a>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>À propos</h2>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation 
              qui m'a permis de développer des compétences solides en développement web. 
              J'aime relever des défis et je suis toujours à la recherche de nouvelles opportunités 
              pour améliorer mes compétences.
            </p>
            <p>
              Mon parcours m'a conduit à travailler sur divers projets, allant de simples sites web 
              à des applications web complexes. Chaque projet est une nouvelle aventure, 
              et je suis déterminé à continuer à apprendre et à évoluer dans ce domaine passionnant.
            </p>
          </div>
          <div className="about-right">
            <div className="about-image-container">
              <img src="/john-doe-about.jpg" alt="Expériences" className="about-image"/>
            </div>
            <div className="experiences-section">
              <h3>Mes expériences</h3>
              <div className="competences-section">
                <div className="competence">
                  <h4>HTML</h4>
                  <div className="bar bar-html">
                    <div></div>
                  </div>
                </div>
                <div className="competence">
                  <h4>CSS</h4>
                  <div className="bar bar-css">
                    <div></div>
                  </div>
                </div>
                <div className="competence">
                  <h4>JavaScript</h4>
                  <div className="bar bar-js">
                    <div></div>
                  </div>
                </div>
                <div className="competence">
                  <h4>PHP</h4>
                  <div className="bar bar-php">
                    <div></div>
                  </div>
                </div>
                <div className="competence">
                  <h4>React</h4>
                  <div className="bar bar-react">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>John Doe</h3>
            <ul>
              <li> 40 Rue Laure Diebold </li>
              <li> 69009 Lyon, France </li>
              <li> Téléphone : 06 20 30 40 50 </li>
              <li className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Liens utiles</h3>
            <ul>
              <li><a href="#"> - Accueil </a></li>
              <li><a href="#"> - A propos </a></li>
              <li><a href="#"> - Services </a></li>
              <li><a href="#"> - Me contacter </a></li>
              <li><a href="#"> - Mention légales </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Mes dernières réalisations</h3>
            <ul>
              <li><a href="#"> - Fresh Food </a></li>
              <li><a href="#"> - Restaurant Akira </a></li>
              <li><a href="#"> - Espace bien-etre </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Mes derniers articles</h3>
            <ul>
              <li><a href="#"> - Coder son site en HTML/CSS </a></li>
              <li><a href="#"> - Vendre ses produits sur le web </a></li>
              <li><a href="#"> - Se positionner sur Google </a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Accueil;