import Image from "next/image"

export default function ProjectItem({ data }) {

    const title = data.properties.Name.rich_text[0].plain_text
    const githubLink = data.properties.github.url
    const tag = data.properties.Tag.multi_select
    // const description = data.properties.description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const link = data.properties.link?.url || data.properties.link.url
    const description = data.properties.description.rich_text[0].plain_text

    return (
        <div className="project-card">
            <Image
                className='rounded-t-xl'
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
                <h1 className='text-2xl font-bold text-slate-800'>{title}</h1>
                <div className="text-slate-800 my-3 dark:text-slate-100">
                    {description}
                </div>
                <div>
                    {tag.map((tag) => (
                        <span className='mr-1 p-1 text-sm py-1 bg-slate-500 rounded-md bg-skyblue-500 dark:bg-skyblue-700 w-30' > {tag.name}</span>
                    ))
                    }
                </div>

                {link ? (<div className="mt-3"><a href={link}>배포링크</a></div>) : null}

                <div className='mt-3'>
                    <a href={githubLink} className="mb-2">깃허브 바로가기</a>
                </div>
            </div>
        </div >
    );
}