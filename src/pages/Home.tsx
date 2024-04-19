import React from "react";
import Card from "../components/card/Card";
import logements from "../data/logements.json";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import banner__home from "../img/banner/home_banner.png";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Banner imageSrc={banner__home} altText="Bannière page d'accueil" title="Chez vous, partout ailleurs" className="home" />
        <div className="gallery">
          {logements.map((logement) => {
            const path = `/logement/${logement.id}`; // Utiliser directement l'ID pour le chemin
            return (
              <Card
                key={logement.id}
                title={logement.title}
                cover={logement.cover}
                path={path} // Passer le chemin en tant que prop
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
