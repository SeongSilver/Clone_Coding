//엔트리는 웹팩에서 프로젝틑를 불러올 때 가장 먼저 불러오는 파일
//현재 작성 중인 리액트 플젝에서는 index.js를 엔트리 파일로 사용한다
//서버 사이드 렌더링을 할 때는 서버를 위한 엔트리 파일을 따로 생성해야 해서 이 파일을 만든다
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering</div>
);

console.log(html);
