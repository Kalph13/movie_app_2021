import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [ movie, setMovie ] = useState({});
    const [ loading, setLoading ] = useState(true);

    console.log(id);
    
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        loading ? <div>Loading...</div> : 
        <div>
            <img src={movie.medium_cover_image} alt={movie.id}/>
            <h3>{movie.title}</h3>
            <p>{movie.rating}/10.0</p>
            <p>{movie.year}</p>
            <p>{movie.description_full}</p>
            <ul>
                {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
        </div>
    );
};

export default Detail;