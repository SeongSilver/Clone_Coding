import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../components/CSS/Main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from '../components/Movie';

function Main() {
    const [movies, setMovies] = useState([]);
    // const [isVisible, setIsVisible] = useState(false);
    // const onSetVisible = (active) => {
    //     setIsVisible(true);
    // }
    const base_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=d101009eea7bbd17187b8445611478bc&language=ko-KR&append_to_response=videos,images&sort_by=popularity.desc`


    //날짜 8자리 포맷으로 받기
    // const nowDate = new Date();
    // const lastWeek = new Date(nowDate.getTime() - (7 * 24 * 60 * 60 * 1000));
    // const year = lastWeek.getFullYear();
    // const month = lastWeek.getMonth() + 1;
    // const day = lastWeek.getDate();

    // const nowMonth = month >= 10 ? month : "0" + month;
    // const nowDay = day >= 10 ? day : "0" + day;
    // const lastWeekDate = `${year}${nowMonth}${nowDay}`

    const getMovies = async () => {
        const json = await (await fetch(base_url)).json();
        setMovies(json.results);
    }
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);

    //react-slick
    const settings = {
        dots: true, //버튼 : 
        infinite: true,
        speed: 500,
        slidesToShow: 3, //컨텐츠 개수
        slidesToScroll: 3 //한번에 넘어가는 컨텐츠 개수
    };

    const confirmEvent = (event) => {
        console.dir(event.target);
    }

    return (
        <div onClick={confirmEvent}>
            <div className="movieContainer">
                <Slider {...settings}>
                    {movies.map((movie) =>
                    (<Movie
                        id={movie.id}
                        key={movie.id}
                        title={movie.title}
                        original_title={movie.original_title}
                        poster_path={movie.poster_path}
                        genres={movie.genres}
                        realseDate={movie.release_date}
                    />
                    ))}
                </Slider>
            </div >
        </div >
    )
}

export default Main;
