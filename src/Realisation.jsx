import React from 'react';
import './styles.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Realisations = () => {
  return (
    <div>
      <div className="realisations-background"></div>
      <section className="realisations-section">
        <Container>
          <div className="header-section text-center mb-5">
            <h1>PORTFOLIO</h1>
            <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
            <div className="blue-line"></div>
          </div>
          <Row>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="project-card">
                <div className="card-image project1-image"></div>
                <Card.Body>
                  <Card.Title>Fresh food</Card.Title>
                  <Card.Text>Réalisation d'un site avec commande en ligne.</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" href="#projet1">Voir</Button>
                </Card.Footer>
              </Card>
              <div className="project-note text-center mt-2">
                Site réalisé avec PHP et MySQL
              </div>
            </Col>

            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="project-card">
                <div className="card-image project2-image"></div>
                <Card.Body>
                  <Card.Title>Restaurant Akira</Card.Title>
                  <Card.Text>Réalisation d'un site vitrine.</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" href="#projet2">Voir</Button>
                </Card.Footer>
              </Card>
              <div className="project-note text-center mt-2">
                Site réalisé avec WordPress
              </div>
            </Col>

            <Col xs={12} lg={4} className="mb-4">
              <Card className="project-card">
                <div className="card-image project3-image"></div>
                <Card.Body>
                  <Card.Title>Espace bien-être</Card.Title>
                  <Card.Text>Réalisation d'un site vitrine pour un praticien de bien-être.</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" href="#projet3">Voir</Button>
                </Card.Footer>
              </Card>
              <div className="project-note text-center mt-2">
                Site réalisé en HTML/CSS
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Realisations;