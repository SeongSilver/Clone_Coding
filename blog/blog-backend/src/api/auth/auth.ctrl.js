import Joi from 'joi';
import User from '../../models/users';

/*
    POST /api/auth/register
    {
        username:'winston',
        password:'mypass123'
    }
*/

export const register = async ctx => {
    //회원가입  
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string().required()
    });
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    const { username, password } = ctx.request.body;
    try {
        //중복 제거를 위ㅎusername이 이미 존재하는지 확인
        //models/users.js의 정적메서드 findByUsername을 사용
        const exists = await User.findByUsername(username);
        if (exists) {
            ctx.status = 409; //Conflict
            return;
        }
        const user = new User({
            username,
        });
        //models/users.js의 인스턴스 함수 setPassword사용
        await user.setPassword(password); //비밀번호 설정
        await user.save(); //데이터베이스에 저장

        //응답할 데이터에서 hashedPassword 필드 제거
        ctx.body = user.serialize();
    } catch (e) {
        ctx.throw(500, e);
    }
}

export const login = async ctx => {
    //로그인
}

export const check = async ctx => {
    //로그인 상태 확인
}

export const logout = async ctx => {
    //로그아웃
}