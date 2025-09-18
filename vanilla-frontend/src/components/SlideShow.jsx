import "../styles/SlideShow.css";
import japan8 from "../assets/AIslide.jpg";

export default function SlideShow() {
    return (
        <div>
            {/* Slideshow container */}
            <div className="slideshow-container">
                {/* Full-width images with number and caption text */}
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={japan8} style={{ width: "100%" }} alt="slide 1" />
                    <div className="text">Caption Text</div>
                </div>

                {/* <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={japan8} style={{ width: "100%" }} alt="slide 2" />
                    <div className="text">Caption Two</div>
                </div> */}

                {/* <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={japan8} style={{ width: "100%" }} alt="slide 3" />
                    <div className="text">Caption Three</div>
                </div> */}

                {/* Next and previous buttons */}
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>

            {/* The dots/circles */}
            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}
