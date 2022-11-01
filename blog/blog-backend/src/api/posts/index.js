import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
//postsCtrl.checkObjectId로 검증이 필요한 부분에 post.ctrl.js에서 만든 checkObjectId 미들웨어 추가
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

///api/posts/:id 경로를 위한 라우터를 새로 맏르고 posts.js에 해당 라우토를 등록해줌
posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
