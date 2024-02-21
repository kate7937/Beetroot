import axios, { all } from "axios";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./movies.scss";
import {ReactComponent as Star} from "./img/star.svg";
const baseURL = "https://api.themoviedb.org";
const apiKey = "26bd9366e6d6a0e206f8ca36362dfd3b";
const allMovies = "/3/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";
const searchMovies = "/3/search/movie";

function Movies () {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [total_pages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    function getMovies (search, page) {
        let url = search ? baseURL + searchMovies : baseURL + allMovies;
        let params = search ?  {api_key : apiKey, query : search, page : page,} : {api_key : apiKey, page : page,};
        axios.get(url, {params: params})
        .then(response => {
            setMovies(response.data.results);
            console.log(response.data.results);
            response.data.total_pages > 500 ? setTotalPages(500) : setTotalPages(response.data.total_pages);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    function searchMovie (e) {
        e.preventDefault();
        getMovies (search);
    }

    function setMoviesPages (e, value) {
        let page = value;
        setPage(page);
        getMovies(search, page);
    }

    useEffect( () => {getMovies(search, page);}, []);

    if (error) {
        return (
            <h2>{error}</h2>
        )
    } else if (movies) {
        let items = movies.map((movie, index) =>
            <div key={index} className="movie">
                <img src={imgBaseURL + movie.poster_path} alt={movie.title}></img>
                <div className="title">
                    <h2>{movie.title}</h2>
                    <div className="star">
                        <Star />
                        <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                    <Link to={"/movies/" + movie.id}><button>See details</button></Link>
                </div>
            </div>
        )
        return (
            <div className="main_container">
                <form
                    onSubmit={searchMovie}
                    className="search"
                >
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
        )
    }
}

export default Movies;
