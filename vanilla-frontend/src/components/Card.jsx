import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ variant, img, title, info, path, children }) => {
  const cardContent = (
    <div className={`card ${variant}-card`}>
      <div className="card-image">{img && <img src={img} alt={title} />}</div>
      <div className="card-details">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{info}</p>
        {children}
      </div>
    </div>
  );

  return path ? (
    <Link className="card card-link" to={path}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
