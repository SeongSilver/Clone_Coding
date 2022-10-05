import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie);
    return (
        <div>
            {loading ? (<h1>Loading....</h1>) : (
                <div className="moviePoster">
                    <div className="largeSection1">
                        <h2>{movie.title}(movie.year) 평점 : {movie.rating}</h2>
                        <img src={movie.medium_cover_image} />
                    </div>
                    <div className="largeSection2">
                        <div>
                            장르 : {movie.genres.map((genres, index) => (
                                <span key={index}>{genres} / </span>
                            ))}
                        </div>
                        <h4>{movie.description_full}</h4>
                    </div>
                </div>
            )}
        </div>

    );
}

export default Detail;