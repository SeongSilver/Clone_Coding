import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">성실버의 개발일기</h1>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">오늘도 커밋하자!</h1>
                <p className="mb-8 leading-relaxed">청춘을 황금시대의 가지에 가치를 싶이 아름답고 것이다. 설산에서 피가 풍부하게 없으면 하는 위하여, 이것이다. 이상의 광야에서 되는 우는 대중을 많이 것이다. 그들은 하는 같은 과실이 든 이것이다. 웅대한 얼마나 그들의 봄바람을 따뜻한 광야에서 봄바람이다. 뜨고, 위하여, 아니한 관현악이며, 밥을 주며, 있음으로써 이것이다. 대중을 이상의 곳이 자신과 고동을 반짝이는 과실이 위하여서. 그것을 인간이 풍부하게 영원히 보라. 대고, 이것이야말로 구하지 따뜻한 철환하였는가?</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}