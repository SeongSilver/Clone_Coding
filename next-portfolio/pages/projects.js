import Layout from '../components/layout'
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from '../config/index'

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>윈스턴's 포트폴리오</title>
                <meta name="description" content="오늘도 리액트" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>프로젝트</h1>
        </Layout>
    )
}

//빌드 타임에 호출
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ page_size: 100 })
    };

    const res = fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)


    return {
        props: {}, // will be passed to the page component as props
    }
}