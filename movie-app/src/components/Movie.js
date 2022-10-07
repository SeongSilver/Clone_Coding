import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Movie.css';

function Movie({ id, key, title, original_title, poster_path, genres }) {

    const image_url = `https://image.tmdb.org/t/p/w400/`;

    console.log(genres);

    return (
        <div key={key} className="movie_card">
            <div className="card">
                <Link to={`/movie/${id}`}><img className="movie_poster" src={image_url + poster_path} alt="no image" /></Link>
                <h3 className="movie_title">{title}({original_title})</h3>
            </div>
        </div >
    )
}


export default Movie;