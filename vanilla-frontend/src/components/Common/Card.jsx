import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Profilepic from "./Profilepic";
import "../../styles/Common/Card.css";

/**
 * @param {Object} props
 * @param {"small" | "medium" | "large"} props.variant - Card style variant
 * @param {string} [props.img] - Image URL
 * @param {string} [props.title] - Card title
 * @param {string} [props.info] - Extra info text
 * @param {string} [props.path] - Navigation path
 * @param {React.ReactNode} [props.children] - Nested elements
 */

const Card = ({ variant, img, title, info, path, children }) => {
  //------ Prop types validation -------
  if (
    variant &&
    variant !== "small" &&
    variant !== "medium" &&
    variant !== "large"
  ) {
    console.warn(
      "Card: 'variant' must be one of 'small', 'medium' or 'large'."
    );
  }
  if (img && typeof img !== "string") {
    console.warn(`Card: 'img' must be a string URL not ${typeof img}`);
    img = null;
  }
  if (title && typeof title !== "string") {
    try {
      title = String(title);
    } catch {
      console.warn("Card: 'title must be a string.");
      title = null;
    }
  }
  if (info && typeof info !== "string") {
    try {
      info = String(info);
    } catch {
      console.warn("Card: 'info' must be a string.");
      info = null;
    }
  }
  if (info && typeof info !== "string") {
    try {
      info = String(info);
    } catch {
      console.warn("Card: 'info' must be a string.");
      info = null;
    }
  }
  if (path && typeof path !== "string") {
    console.warn("Card: 'path' must be a string url.");
    path = null;
  }
  if (children && typeof children !== "object") {
    console.warn("Card: 'children' must be a valid React node.");
  }

  const cardContent = (
    <div className={`card ${variant}-card`}>
      {/*------ For small card ------ */}

      {variant === "small" && img && (
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
      )}

      {/*------ For medium card ------ */}

      {variant === "medium" && img && (
        <Profilepic img={img} size={120} alt={title} />
      )}

      {/*------ For large card ------ */}

      {variant === "large" && img && (
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

Card.PropTypes = {
  variant: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
