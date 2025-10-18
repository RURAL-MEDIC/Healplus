import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // optional — for custom styling

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        <strong>Oops! The page you’re looking for doesn’t exist.</strong>
        <br />
        <small>
          If You are seeing this page, it means this page is not{" "}
          <b>available</b> or <b>under developmment</b>.
        </small>
      </p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
