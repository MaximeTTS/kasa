import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/carrousel/CarrouselImage";
import LogementText from "../components/carrousel/CarrouselText";
import Collapse from "../components/collapse/Collapse";
import Error from "../pages/NotFoundPage";

const Logement: React.FC = () => {
  // Récupérer l'identifiant du logement depuis l'URL
  const { slugId } = useParams<{ slugId?: string }>();
  // Extraire l'ID du logement depuis le slugId
  const id = slugId?.split("-").pop();

  // Trouver le logement correspondant dans la liste des logements
  const logement = id ? logements.find((logement) => logement.id === id) : null;

  if (!logement) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      <div className="section__logement">
        <Carousel images={logement.pictures} />
        <LogementText
          title={logement.title}
          hostName={`${logement.host.name}`}
          hostPicture={logement.host.picture}
          location={logement.location}
          tags={logement.tags}
          rating={parseInt(logement.rating, 10)}
        />
        <div className="section__collapse">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={
              <div>
                {logement.equipments.map((equipement, index) => (
                  <div key={index}>{equipement}</div>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Logement;
