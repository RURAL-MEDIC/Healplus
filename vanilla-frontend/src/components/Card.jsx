import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import Profilepic from "./Profilepic";

const Card = ({ variant, img, title, info, path, children }) => {
  const cardContent = (
    <div className={`card ${variant}-card`}>

      {/*------ For small card ------ */}

      {variant === "small" && (
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
      )}

      {/*------ For medium card ------ */}

      {variant === "medium" && <Profilepic img={img} size="120" alt={title} />}

      {/*------ For large card ------ */}

      {variant === "large" && (
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
      )}

      {/*------ For card details ------ */}
      <div className="card-details">
        <p>
          <strong>{title}</strong>
        </p>
        {variant !== "small" && (
          <>
            <p>{info}</p>
            {children}
          </>
        )}
      </div>
    </div>
  );

  return path ? (
    <Link className="card-link" to={path}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
