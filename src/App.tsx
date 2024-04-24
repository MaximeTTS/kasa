import React, { FunctionComponent } from "react";
import "./_App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App: FunctionComponent = () => {
  return (
    <div className="app-body">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
            <Route path="/about" element={<About />} /> {/* Route pour la page À Propos */}
            <Route path="/logement/:slugId" element={<Logement />} /> {/* Route pour la page Logement */}
            <Route path="*" element={<NotFoundPage />} /> {/* Route pour les chemins non trouvés */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
