import React from "react";
import Collapse from "../components/collapse/Collapse";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import banner__about from "../img/banner/about_banner.png";

const About: React.FC = () => {
  return (
    <body>
      <Header />
      <main>
        <Banner imageSrc={banner__about} altText="Bannière page à propos" className="about" />
        <div className="about__container">
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
            N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
            chaque logement correspond aux critères de sécurité établis par nos services. 
            En laissant une note aussi bien à l'hôte qu'au locataire, 
            cela permet à nos équipes de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default About;
