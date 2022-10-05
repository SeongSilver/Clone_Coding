import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const params = useParams();
    console.log(params);
    const base_url = `https://api.themoviedb.org/3/trending/movie/week?api_key=d101009eea7bbd17187b8445611478bc&language=ko-KR&append_to_response=videos,images&sort_by=popularity.desc&id=${params.id}`
    const getMovie = async () => {
        const json = await (
            await fetch(base_url)
        ).json();
        console.log(json + "ddd");
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>Detail</div>
    )
}

export default Detail