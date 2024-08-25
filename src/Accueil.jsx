import React from 'react';
import './styles.css';

const Accueil = () => {
  return (
    <div>
      {/* Section Header */}
      <section id="home" className="header1">
        <div className="overlay">
          <span>Bienvenue sur notre site</span>
          <h2>Nous sommes ravis de vous voir ici</h2>
          <a href="#about" className="btn">En savoir plus</a>
        </div>
      </section>

      {/* Section À propos */}
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
              <img src="/john-doe-about.jpg" alt="Expériences" className="about-image" />
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
    </div>
  );
}

export default Accueil;