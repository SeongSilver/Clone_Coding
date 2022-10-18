import Layout from '../components/layout'
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from '../config/index.js'
import ProjectItem from '../components/projects/projectItem'

export default function Projects({ projects }) {

    console.log(projects)

    return (
        <Layout className="px-100">
            <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-64">
                <Head>
                    <title>윈스턴's 포트폴리오</title>
                    <meta name="description" content="오늘도 리액트" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className='text-3xl font-bold'>
                    총 프로젝트 :
                    <span className='pl-4 text-blue-500'>{projects.results.length}</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 m-6 gap-8' >
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject} />
                    ))}
                </div>
            </div>
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