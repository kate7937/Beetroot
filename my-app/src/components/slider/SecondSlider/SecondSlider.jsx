import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./secondSlider.scss";
const baseURL = "https://api.themoviedb.org";
const apiKey = "26bd9366e6d6a0e206f8ca36362dfd3b";
const allMovies = "/3/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function SecondSlider() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  function getMovies() {
    let url = baseURL + allMovies;
    let params = { api_key: apiKey, page: 3 };
    axios
      .get(url, { params: params })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  useEffect(() => {
    getMovies();
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  } else if (movies) {
    let items = movies.map((movie, index) => (
      <SwiperSlide key={index}>
        <Link to={"/movies/" + movie.id} className="movie">
          <img src={imgBaseURL + movie.poster_path} alt={movie.title}></img>
        </Link>
      </SwiperSlide>
    ));
    return (
      <div className="movie_slider">
        <h2>New Releases</h2>
        <Swiper
          modules={[Navigation]}
          className="second_slider"
          spaceBetween={12}
          slidesPerView={6}
          navigation
          breakpoints={{
            50: {
              slidesPerView: 1,
            },
            525: {
              slidesPerView: 2,
            },
            780: {
              slidesPerView: 3,
            },
            1075: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1430: {
              slidesPerView: 6,
            },
          }}
        >
          {items}
        </Swiper>
      </div>
    );
  }
}

export default SecondSlider;
