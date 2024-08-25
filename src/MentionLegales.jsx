import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Import des icônes

const MentionsLegales = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: '4rem' }}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales</title>
      </Helmet>

      <h1 className="mb-4 text-center">MENTIONS LÉGALES</h1>

      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Éditeur du site</Accordion.Header>
              <Accordion.Body>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>John Doe</p>
                <p>40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>
                  <FaPhone style={{ marginRight: '8px' }} /> {/* Icône téléphone */}
                  <a href="tel:+33620304050" style={{ textDecoration: 'none', color: 'inherit' }}>
                    06 20 30 40 50
                  </a>
                </p>
                <p>
                  <FaEnvelope style={{ marginRight: '8px' }} /> {/* Icône email */}
                  <a href="mailto:john.doe@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                    john.doe@gmail.com
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Hébergeur</Accordion.Header>
              <Accordion.Body>
                <p>91 rue du Faubourg Saint Honoré</p>
                <p>75008 Paris</p>
                <p>
                  <FaGlobe style={{ marginRight: '8px' }} /> {/* Icône site web */}
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                    www.alwaysdata.com
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Crédits</Accordion.Header>
              <Accordion.Body>
                <p>
                  Les images utilisées sur ce site proviennent de{' '}
                  <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer">
                    Pixabay
                  </a>.
                </p>
                <p>Site développé par John Doe, étudiant du CEF.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MentionsLegales;