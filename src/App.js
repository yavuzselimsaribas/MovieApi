import React from "react";
import {useEffect,useState} from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";


const API_URL = "https://www.omdbapi.com/?apikey=3cb5b8de";
const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovie = async (e) => {
        const response = await fetch(`${API_URL}&s=${e}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovie("Batman");
    }, []);
    return (
        <div className="app">
            <h1>MovieWorld</h1>
            <div className="search">
                <input type="text" placeholder="Search for a movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <img src={SearchIcon}
                alt= "search"
                onClick={() =>searchMovie(search)}/>
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie1={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>

            )}

        </div>
    );
}

export default App;