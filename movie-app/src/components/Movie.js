import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({coverImg, title, summary, genres, year, rating, id}){
    const poster = {
        border:"none",
        borderRadius:"20px",
        boxShadow:"0 0 20px rgba(0,0,0,0.3)",
        margin:"50px auto",
        padding:"30px",
        textAlign:"center",
        width:"40%",
        backgroundColor:"rgba(30,30,30,0.6)",
        color:"white",
    }

    return (
        <div style={poster}>
            <h2>
                <Link to={`/movie/${id}`}>{title}({year})</Link> / 평점 : {rating}
            </h2>
            <hr/>
            <img src={coverImg} alt={title}/>
            <hr/>
            <ul>
                {genres.map((genres)=>(
                    <li key="genres">{genres}</li>
                ))}
            </ul>
            <p>{summary}</p>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;