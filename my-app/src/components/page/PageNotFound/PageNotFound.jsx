import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./404.scss";
import page404 from "./img/page404.png";

function PageNotFound() {
  useEffect(() => {
    document.title = "Movies Anywhere | 404 error";
  }, []);

  return (
    <div className="notFound">
      <img src={page404} alt="PageNotFound" />
      <h2>Sorry page not found</h2>
      <Link to={"/"}>Back to Home Page</Link>
    </div>
  );
}

export default PageNotFound;
