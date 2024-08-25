import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-background"></div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="header-section text-center">
            <h1>Me contacter</h1>
            <p>N'hésitez pas à me contacter pour toute question ou collaboration.</p>
            <div className="blue-line"></div>
          </div>

          <div className="contact-content">
            {/* Formulaire de contact */}
            <div className="contact-form">
              <h2>Formulaire de contact</h2>
              <div className="blue-line"></div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Votre nom</label>
                  <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Votre email</label>
                  <input type="email" id="email" name="email" placeholder="Votre email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Votre numéro de téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input type="text" id="subject" name="subject" placeholder="Sujet" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Votre message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Envoyer</button>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="contact-info">
              <h2>Mes coordonnées</h2>
              <div className="blue-line"></div>
              <p>
                Vous pouvez également me contacter directement via les informations ci-dessous :
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i> {/* Logo adresse */}
                  <span><strong>Adresse :</strong> 69009 Lyon, France</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i> {/* Logo téléphone */}
                  <span><strong>Téléphone :</strong> 06 20 30 40 50</span>
                </div>
                <div className="contact-map">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.286148029371!2d4.84473691505132!3d45.76163417909553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea1d6c0c4a7b%3A0x8b7f8d3f6d5a9ae2!2s69009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1630443546598!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;