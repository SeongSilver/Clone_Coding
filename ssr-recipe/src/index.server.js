import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();

//서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
    //이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해줌
    const context = {};
    const jsx = (
        //StaticRouter는 서버사이드렌더링 용도로 사용되는 라우터
        //location값에 따라 라우팅해줌 req는 요청에 대한 정보를 지님
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const root = ReactDOMServer.renderToString(jsx); //렌더링
    res.send(root); //클라잉너트에게 결과물을 응담
}

app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
})