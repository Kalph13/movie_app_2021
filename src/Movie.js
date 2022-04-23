import React from "react";
import { Link } from "react-router-dom";

const Movie = (prop) => {
    const movie = prop.movie;
    return (
        <div>
            <img src={movie.medium_cover_image} alt={movie.id}/>
            <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
        </div>
    );
};

export default Movie;