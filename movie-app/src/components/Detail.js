import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CSS/Detail.css';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Detail() {
    const params = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    // console.log(params);
    const image_url = `https://image.tmdb.org/t/p/w400/`;

    const getMovie = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d101009eea7bbd17187b8445611478bc&language=ko-KR`)
        ).json();
        setMovie(json);
        setGenres(json.genres);
    }

    const backSite = () => {
        navigate(-1);
    }
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie)

    const settings = {
        dots: true, //버튼 : 
        infinite: true,
        speed: 500,
        slidesToShow: 1, //컨텐츠 개수
        slidesToScroll: 3 //한번에 넘어가는 컨텐츠 개수
    };

    return (
        <div className="detailBox">
            <div onClick={backSite}>
                <MdOutlineKeyboardBackspace size="40" cursor="pointer" />
            </div>
            <div>
                <h2>{movie.title}({movie.original_title})</h2>
                <br />
                {movie.belongs_to_collection ? (
                    <img src={image_url + movie.belongs_to_collection.poster_path} className="movie_poster" alt="" />
                ) : (
                    <img className="movie_poster" src={image_url + movie.poster_path} alt="" />
                )}
            </div>
            <div>
                <h3>평점&emsp;:&emsp;{Math.floor(movie.vote_average * 100) / 100} 점</h3>
                <h3>개봉일&emsp;:&emsp; {movie.release_date}</h3>
                <h3>장르&emsp;:&emsp;{genres.map((genre) => <span>{genre.name}&emsp;</span>)}</h3>
                <span>
                    <h3>{movie.tagline ? "\" " + (movie.tagline) + " \"" : "줄거리"}</h3>
                    <hr />
                    <h4>{movie.overview}</h4>
                </span>
            </div>
        </div >
    )
}

export default Detail