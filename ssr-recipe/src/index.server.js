import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import path from 'path';
import fs from 'fs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer, { rootSaga } from './modules/rootReducer';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleware from 'redux-saga';
import { END } from 'redux-saga';


//build 폴더 안의 asset-manifest.json 에서 파일 경로들을 조회한다
const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

function createPage(root, stateScript) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <title>React App</title>
            <link href="${manifest.files['main.css']}" rel="stylesheet"  />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">${root}</div>
            ${stateScript}
            <script src="${manifest.files['main.js']}"></script>
        </body>
    </html>;
    `;
}

const app = express();

//서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req, res, next) => {
    //이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해줌
    const context = {};
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
    //toPromise는 sagaMiddleware.run 을 통해 만든 Task를 Promise로 변환한다
    //별도의 작업을 하지 않으면 루트사가에서 액션을 끝없이 모니터링하기 때문에 Promise가 끝나지 않기 때문에 
    //redux-saga의 END라는 액션을 발생시켜야 promise를 끝낼 수 있다.
    const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();
    const preloadContext = {
        done: false,
        promises: []
    }
    const jsx = (
        //StaticRouter는 서버사이드렌더링 용도로 사용되는 라우터
        //location값에 따라 라우팅해줌 req는 요청에 대한 정보를 지님
        <PreloadContext.Provider value={preloadContext}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        </PreloadContext.Provider>
    );
    //renderToStaticMarkup은 정적인 페이지 만들 때 사용
    //이함수로 만든 리액트 렌더링 결과물은 클라이언트쪽이서 HTML DOM 인터렉션 지원힘듬
    //renderToStaticMarkup을 사용한 이유는 Preloader로 넣어주었떤 함수를 호출하기 위해서, 처리속도가 보다 빠르기 떄문
    ReactDOMServer.renderToStaticMarkup(jsx); //renderToStaticMarkup으로 한번 렌더링
    //END액션이 발생되면 액션 모니터링 작업이 모두 종료되고, 모니터링 되기 전에 시작된 getUserSaga 같은
    //사가 함수들이 있다면 해당 함수들이 완료되고나서 Promise가 끝나게 된다
    //이 Promise가 긑나는 시점에 리덕스 스토어에는 우리가 원하는 데이터가 채워지고 렌더링하면 결과물이 나온다
    store.dispatch(END); //redux-saga의 END 액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료된다.
    try {
        await sagaPromise; //기존에 진행 중이던 사가들이 모두 끝날때까지 기다린다
        await Promise.all(preloadContext.promises); //모든 프로미스 기다림
    } catch (error) {
        return res.status(500);
    }
    preloadContext.done = true;

    const root = ReactDOMServer.renderToString(jsx); //렌더링   
    const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
    const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; //리덕스 초기상태를 스크립트로 주입
    res.send(createPage(root, stateScript)); //클라잉너트에게 결과물을 응담
}

const serve = express.static(path.resolve('./build'), {
    index: false // "/"경로에서 index.html을 보여주지 않도록 설정
})

app.use(serve); //***순서 중요 serverRender 전에 위치 */
app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
})