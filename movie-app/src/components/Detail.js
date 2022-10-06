import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    console.log(params);
    const image_url = `https://image.tmdb.org/t/p/w400/`;

    const getMovie = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d101009eea7bbd17187b8445611478bc&language=ko-KR`)
        ).json();
        setMovie(json);
    }
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie)
    return (
        <div>
            <div>
                <h2>{movie.title}({movie.original_title})</h2>
                <img src={image_url + movie.poster_path} />
                {movie.belongs_to_collection ? (
                    <img src={image_url + movie.belongs_to_collection.poster_path} />) : null}
                <h3>{movie.overview}</h3>
                <h3>{movie.release_date}</h3>
            </div>

        </div>
    )
}

export default Detail