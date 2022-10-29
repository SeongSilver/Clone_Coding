import { useEffect } from 'react';
import Users from '../components/Users';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../modules/users';
import { Preloader } from '../lib/PreloadContext';

const UsersContainer = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    //CSR - 컴포넌트가 마운트 되고나서 호출
    //SSR에서는 useEffect 작동 안함
    useEffect(() => {
        //PreloadContext 실행으로 자료가 이미 있다면 또 요청하지 않음
        if (users) return;
        dispatch(getUsers());
    }, [dispatch, users]);

    return (
        <>
            <Users users={users} />;
            {/**PreloadContext 완료 아니면 getUsers라는 비동기 작업을 실행하고 결과를
             *  PreloadContext.promises에 적재
             * 무조건 null 리턴하니 화면에는 보이지 않음*/}
            <Preloader resolve={() => dispatch(getUsers)} />
        </>
    );
}

export default UsersContainer;