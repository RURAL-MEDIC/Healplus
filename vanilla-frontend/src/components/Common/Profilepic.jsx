import React from "react";
import PropTypes, { number } from "prop-types";
import "../../styles/Common/Profilepic.css";

/**
 *
 * @param {object} props
 * @param {string} props.img - Image URL
 * @param {number} [props.size] - Size in pixels
 * @param {string} [props.alt] - Alt text
 */

const Profilepic = ({ img, size = 64, alt }) => {
  if (img && typeof img !== "string") {
    console.warn(`Profilepic: 'img' must be a string URL not ${typeof img}`);
    img = null;
  }
  if (size && typeof size !== "number") {
    try {
      size = number(size);
    } catch {
      console.warn(
        `Profilepic: 'size' must be a number not ${typeof size}. Rendering default size 64px.`
      );
    }
  }
  if (alt && typeof alt !== "string") {
    try {
      alt = String(alt);
    } catch {
      console.warn(`Profilepic: 'alt' must be a string not ${typeof alt}.`);
      alt = "profile";
    }
  }

  const sizeValue =
    typeof size === "number" ? `${size}px` : `${Number(size)}px`;
  return (
    <div className="profile-pic">
      {img && (
        <img
          src={img}
          style={{ width: sizeValue, height: sizeValue }}
          alt={`${alt} pic`}
        />
      )}
    </div>
  );
};

Profilepic.PropTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.number,
  alt: PropTypes.string,
};

export default Profilepic;
