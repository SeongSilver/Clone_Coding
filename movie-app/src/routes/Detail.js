import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './Detail.css';

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async ()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    }, [])
    console.log(movie);
    return (
        <div>
            {loading ? (<h1>Loading....</h1>) : (
                <div className="moviePoster">
                    <div>
                        <h3>{movie.title}(movie.year) 평점 : {movie.rating}</h3>
                        <img src={movie.medium_cover_image} />
                    </div>
                    <div>
                        <div>
                            장르 : {movie.genres.map((genres, index)=>(
                                <span key={index}>{genres} / </span>
                            ))}
                        </div>
                        {movie.description_intro}
                    </div>
                </div>
            )}
        </div>
    
    );
}

export default Detail;