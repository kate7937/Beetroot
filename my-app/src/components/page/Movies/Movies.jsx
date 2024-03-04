import axios, { all } from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../../../config.json";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./movies.scss";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as Unlike } from "./img/unlike.svg";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [total_pages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [liked, setLiked] = useState(() => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf("movie-")) {
        items.push(Number(key.replace("movie-", "")));
      }
    }
    return items;
  });

  useEffect(() => {
    document.title = "Movies Anywhere | Movies";
  }, []);

  function getMovies(search, page) {
    let url = search
      ? config.api.baseURL + config.api.searchMovies
      : config.api.baseURL + config.api.allMovies;
    let params = search
      ? { api_key: config.api.apiKey, query: search, page: page }
      : { api_key: config.api.apiKey, page: page };
    axios
      .get(url, { params: params })
      .then((response) => {
        setMovies(response.data.results);
        response.data.total_pages > 500
          ? setTotalPages(500)
          : setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function searchMovie(e) {
    e.preventDefault();
    getMovies(search);
  }

  function setMoviesPages(e, value) {
    let page = value;
    setPage(page);
    getMovies(search, page);
  }

  function like(event) {
    event.preventDefault();
    let id = Number(
      event.currentTarget.attributes.getNamedItem("data-movie-id").value
    );
    let isLiked = liked.includes(id);
    if (!isLiked) {
      let newItem = [...liked, id];
      setLiked(newItem);
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == id) {
          window.localStorage.setItem("movie-" + id, JSON.stringify(movies[i]));
        }
      }
    } else {
      let newItem = liked.filter((savedId) => savedId !== id);
      setLiked(newItem);
      window.localStorage.removeItem("movie-" + id);
    }
  }

  useEffect(() => {
    getMovies(search, page);
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  } else if (movies) {
    let items = movies.map((movie, index) => (
      <div key={index} className="movie">
        <img
          src={config.api.imgBaseURL + movie.poster_path}
          alt={movie.title}
        ></img>
        <div className="title">
          <h2>{movie.title}</h2>
          <div className="star">
            <Star />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <div className="buttons">
            <div
              onClick={like}
              data-movie-id={movie.id}
              className={liked.includes(movie.id) ? "like active" : "like"}
            >
              <Unlike />
            </div>
            <Link to={"/movies/" + movie.id}>
              <button>See details</button>
            </Link>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="main_container">
        <form onSubmit={searchMovie} className="search">
          <div className="form-items">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="movies">{items}</div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination
              count={total_pages}
              color="primary"
              onChange={setMoviesPages}
            />
          </Stack>
        </div>
      </div>
    );
  }
}

export default Movies;
