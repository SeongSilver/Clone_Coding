import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

//액션 타입 선언
//한 요청당 3개 만들어

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
// //thunk 함수 생성
// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST });
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         }); //요청성공
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         })
//         throw e; //나중에 컴포넌트 단에서 에러 조회할 수 있음
//     }
// }

// export const getUsers = () => async dispatch => {
//     dispatch({ type: GET_USERS });
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data
//         }); //요청성공
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         })
//         throw e; //나중에 컴포넌트 단에서 에러 조회할 수 있음
//     }
// }
//초기상태 선언
//요청중 로딩 상태는 loading에서 관리
const initialState = {
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),

        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        }),
    },
    initialState
)

export default sample;