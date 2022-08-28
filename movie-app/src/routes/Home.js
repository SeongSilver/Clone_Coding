import React, {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await(
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        )
    ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    
    useEffect(()=>{
    //## 기존 fetch사용방식
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    // )
    // .then(response=>response.json())
    // .then(json=>{
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // });
    getMovies();
    }, []);
    const poster = {
    border:"none",
    borderRadius:"20px",
    boxShadow:"0 0 20px rgba(0,0,0,0.3)",
    margin:"50px auto",
    padding:"30px",
    textAlign:"center",
    width:"30%",
    backgroundColor:"rgba(30,30,30,0.6)",
    color:"white",
    }
    console.log(movies);
    return (
    <div>
        {loading ? (
        <h1>Loading...</h1>
        ) : (
        <div>
            {movies.map((movie) => (
            //넘겨줄 props의 이름은 실제와 다르게 해도 상관없다
            <Movie 
              //key는 React.js에서만, map안에서 component들을 render할 때 사용한다
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
                year={movie.year}
                id={movie.id}
            />
            ))}
        </div>
        )}
    </div>
    );
}

export default Home;