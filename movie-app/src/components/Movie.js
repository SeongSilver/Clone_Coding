import React from 'react';
import { Link } from 'react-router-dom';


function Movie({ id, key, title, original_title, poster_path, genres }) {

    const image_url = `https://image.tmdb.org/t/p/w400/`;

    return (
        <div key={key} className="movieCard">
            <div className="card">
                <Link to={`/movie/${id}`}><img src={image_url + poster_path} /></Link>
                <h3>{title}({original_title})</h3>
            </div>
        </div >
    )
}




export default Movie;