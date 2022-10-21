import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewsItem from './NewsItem'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom:3rem;
    width:768px;
    margin:0 auto;
    margin-top:2rem;
    @media screen and (max-width:768px){
        width:100%;
        padding-left:1rem;
        padding-right:1rem;
    }
`;

const NewsList = ({ category }) => {
    //useEffect에 등록하는 함수에 async를 붙이면 안된다
    //useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문
    //useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또다른 함수를 만들어 사용해야함
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=051a36fb5b0c4ac5b62932eb085fee00`);
    }, [category])

    //대기중일 때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }
    //아직 response 값이 설정되지 않았을때
    if (!response) {
        return null;
    }
    //에러가 발생했을 떄
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }
    //articles 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {
                articles.map(article => (
                    <NewsItem key={articles.url} article={article} />
                ))
            }
        </NewsListBlock>
    )
}

export default NewsList