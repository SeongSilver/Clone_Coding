import React from 'react';
import { Link } from 'react-router-dom';


function Movie({ id, key, title, original_title, poster_path }) {

    const image_url = `https://image.tmdb.org/t/p/w400/`;

    return (
        <div key={key} className="movieCard">
            <div className="card">
                <Link to={`/movie/${id}`}><img src={image_url + poster_path} /></Link>
                <h3>{title}({original_title})</h3>
            </div>
            {/* <div>
                    <span>개봉일 : </span>
                    <span>{movie.realease_date}</span>
                </div>
                <div>
                    <span>줄거리 : </span>
                    <span>{movie.overview} 원</span>
                </div> */
            }
        </div >
    )
}




export default Movie;