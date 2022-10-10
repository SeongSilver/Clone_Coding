import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Movie.css';

function Movie({ id, key, title, original_title, poster_path, realseDate }) {

    const image_url = `https://image.tmdb.org/t/p/w400/`;

    return (
        <div key={key} className="movie_card">
            <div className="card">
                <div className="front">
                    <img className="movie_poster" src={image_url + poster_path} alt="no image" />
                </div>
                <div className='back'>
                    <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "white" }}><h1 className="movie_title">{title}<br />({original_title})</h1></Link>

                </div>
            </div>
        </div >
    )
}


export default Movie;