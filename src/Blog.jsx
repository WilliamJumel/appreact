import React from 'react';
import './styles.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogPosts = [
  {
    title: "Coder son site en HTML/CSS",
    date: "Publié le 22 août 2022",
    excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageClass: "project1-image",
  },
  {
    title: "Vendre ses produits sur le web",
    date: "Publié le 20 août 2022",
    excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageClass: "project2-image",
  },
  {
    title: "Se positionner sur Google",
    date: "Publié le 1 août 2022",
    excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageClass: "project3-image",
  },
  {
    title: "Coder en responsive design",
    date: "Publié le 31 juillet 2022",
    excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageClass: "project4-image",
  },
  {
    title: "Technique de référencement",
    date: "Publié le 30 juillet 2022",
    excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageClass: "project5-image",
  },
  {
    title: "Apprendre à coder",
    date: "Publié le 12 juillet 2022",
    excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageClass: "project6-image",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="background-image-section"></div>
      <section className="realisations-section">
        <Container>
          <div className="header-section text-center mb-5">
            <h1>Mon Blog</h1>
            <p className="text-muted">Dernières nouvelles et articles</p>
            <div className="blue-line"></div>
          </div>
          <Row>
            {blogPosts.map((post, index) => (
              <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
                <Card className="project-card">
                  <div className={`card-image ${post.imageClass}`}></div>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.date}</Card.Text>
                    <Card.Text>{post.excerpt}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary">Lire la suite</Button>
                  </Card.Footer>
                </Card>
                <div className="project-note text-center mt-2">
                  {post.date}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;