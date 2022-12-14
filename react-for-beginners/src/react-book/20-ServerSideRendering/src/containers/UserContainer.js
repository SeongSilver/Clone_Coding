import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { usePreloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';

const UserContainer = ({ id }) => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    usePreloader(() => dispatch(getUser(id))); //t서버 사이드 렌더링을 할 떄 API 호출하기
    useEffect(() => {
        if (user && user.id === parseInt(id, 10)) return; //사용자가 존재하고 id가 일치하면 요청 x
        dispatch(getUser(id));
    }, [dispatch, id, user])

    //컨테이너 유효성 검사 후 return null을 해야 하는 경우에
    //null 대신 Preloader반환
    if (!user) return null;
    return <User user={user} />;
}

export default UserContainer;