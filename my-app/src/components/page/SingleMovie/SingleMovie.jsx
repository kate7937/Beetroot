import axios, { all } from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../../config.json";
import "./singleMovie.scss";
import { ReactComponent as Star } from "./img/star.svg";

function SingleMovie() {
  const movieID = useParams().id;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  function getMovie() {
    let url = config.api.baseURL + config.api.singleMovie + movieID;
    let params = { api_key: config.api.apiKey };
    axios
      .get(url, { params: params })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  useEffect(() => {
    getMovie();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  } else if (movie) {
    document.title = "Movies Anywhere | " + movie.title;
    return (
      <div className="single_movie">
        <div className="images">
          <img
            className="first_img"
            src={config.api.imgBaseURL + movie.backdrop_path}
            alt={movie.title}
          ></img>
          <img
            className="second_img"
            src={config.api.imgBaseURL + movie.poster_path}
            alt={movie.title}
          />
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="star">
            <Star />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <h3>Release data : {movie.release_date}</h3>
          <h3>{movie.vote_count} readers watched this movie</h3>
          <Link to={"/movies"}>
            <button>Back to All Movies</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
