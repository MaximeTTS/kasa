// Dans un fichier nommé ErrorPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="error__div">
        <h1 className="error__h1">404</h1>
        <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
