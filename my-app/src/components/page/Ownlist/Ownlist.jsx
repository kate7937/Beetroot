import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ownlist.scss";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as Unlike } from "./img/unlike.svg";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function Ownlist() {
  const [movies, setMovies] = useState(null);
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
    document.title = "Movies Anywhere | Own List";
  }, []);

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
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf("movie-")) {
        let movieItem = JSON.parse(localStorage.getItem(key));
        items.push(movieItem);
      }
    }
    setMovies(items);
  }, []);

  if (movies && movies.length > 0) {
    const items = movies.map((movie, index) => {
      return (
        <div key={index} className="movie">
          <img src={imgBaseURL + movie.poster_path} alt={movie.title}></img>
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
      );
    });
    return (
      <div className="main_container">
        <div className="movies">{items}</div>
      </div>
    );
  } else {
    return (
      <div className="empty_list">
        <h1>
          Your movie list is empty. You can return to the{" "}
          <Link to={"/movies"}>All Movies page</Link> and add your favorites to
          this list.
        </h1>
      </div>
    );
  }
}

export default Ownlist;
