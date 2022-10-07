import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Movie.css';

function Movie({ id, key, title, original_title, poster_path }) {

    const image_url = `https://image.tmdb.org/t/p/w400/`;

    const checkThis = () => {
        const cardRotate = document.querySelector('.cardRotate');
        cardRotate.classList.add("backRotate");
        cardRotate.classList.remove("cardRotate");
        console.log("action")
    }
    const checkOut = () => {
        const cardRotate = document.querySelector('.cardRotate');
        this.classList.add("cardRotate");
        this.classList.remove("backRotate");
    }
    const rotate = () => {

    }

    return (
        <div key={key} className="movie_card cardRotate" onMouseOver={checkThis} onMouseLeave={checkOut}>
            <div className="card">
                <Link to={`/movie/${id}`}><img className="movie_poster" src={image_url + poster_path} alt="no image" /></Link>
                <h3 className="movie_title">{title}({original_title})</h3>
            </div>
        </div >
    )
}


export default Movie;