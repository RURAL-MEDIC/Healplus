import React, {useEffect, useState } from "react";
import japan8 from "../../assets/AIslide.jpg"; // adjust path
import japan9 from "../../assets/Slide2.png"; // adjust path
import japan10 from "../../assets/Slide3.jpg"; // adjust path



import "../../styles/Sections/SlideShow.css";

const Slideshow = () => {
  const slides = [
    { img: japan8, caption: "Chat with AI", link: "/chat" },
    { img: japan9, caption: "Caption Two" },
    { img: japan10, caption: "Caption Three" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrent(index);


  return (
    <div>
      {/* Slideshow container */}
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade`}
            style={{ display: index === current ? "block" : "none" }}
          >
            <div className="numbertext">{index + 1} / {slides.length}</div>
            <img src={slide.img} alt={`slide ${index + 1}`} style={{ width: "100%" }} />
            <div className="text"><a href={slide.link} style={{ color: "white", textDecoration: "underline" , fontSize: "18px", backgroundColor: "rgba(0,0.2,0,0.3", padding: "6px", borderRadius: "5px" }}>
                {slide.caption}
              </a></div>
          </div>
        ))}

        {/* Next and previous buttons */}
        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>
      </div>

      {/* The dots/circles */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
