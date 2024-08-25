import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './Accueil';
import Service from './Services';
import Realisation from './Realisation';
import Blog from './Blog';
import Contact from './MeContacter';
import Header from './header';
import Footer from './footer';
import MentionsLegales from './MentionLegales'; // Importer la page Mentions Légales

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Service />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} /> {/* Ajouter cette route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;