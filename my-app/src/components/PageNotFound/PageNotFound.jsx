import { Link } from "react-router-dom";
import "./404.scss";
import page404 from "./img/page404.png";

function PageNotFound () {
    return (
        <div className="notFound">
            <img src={page404} alt="PageNotFound" />
            <h2>Sorry page not found</h2>
            <Link to={'/'}>Back to Home Page</Link>
        </div>
    )
}

export default PageNotFound;
