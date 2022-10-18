import Layout from '../components/layout'
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from '../config/index.js'

export default function Projects({ projects }) {

    console.log(projects)

    return (
        <Layout>
            <Head>
                <title>윈스턴's 포트폴리오</title>
                <meta name="description" content="오늘도 리액트" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>총 프로젝트 : {projects.results.length}</h1>
            {
                projects.results.map((aProject) => (
                    <h1>{aProject.properties.Name.rich_text[0].plain_text}</h1>
                ))
            }
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
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Work Period",
                    "direction": "descending",
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const projects = await res.json();

    const projectNames = projects.results.map((aProject) => (
        aProject.properties.Name.rich_text[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
        props: { projects }, // will be passed to the page component as props
    }
}