const db = require('../models');
const User = db.users
const passport = require('passport');
const bcrypt = require('bcrypt');

// middlewares
const { isValidEmail, isValidLength, isValidPassword } = require('../middleware/validators/validate')

/**
 * 회원가입
 */
const addUser = async (req, res) => {
    let info = {
        user_id: req.body.user_id,
        user_password: req.body.user_password,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_cellphone: req.body.user_cellphone,
        user_charge: req.body.user_charge, // 담당 대분류
        user_birth_date: req.body.user_birth_date,
        user_company: req.body.user_company, // 소속 사명(nullable)
        is_admin: req.body.is_admin, // 관리자 계정은 수동 생성
    };
    
    if(!isValidLength(info.user_id, 5, 20)) {
        return res.status(400).json({ error: "아이디는 5~20자 이내로 입력해주세요." });
    }

    if(!isValidPassword(info.user_password)) {
        return res.status(400).json({ error: "비밀번호는 알파벳, 숫자, 특수문자를 포함한 8~16자 이내로 입력해주세요." });
    }

    if(!isValidEmail(info.user_email)) {
        return res.status(400).json({ error: "유효한 이메일 주소를 입력해주세요." })
    }

    // 중복된 user_id 검사
    const existingUserById = await User.findOne({ where: { user_id: info.user_id } });
    if (existingUserById) {
        return res.status(409).json({ error: "이미 사용 중인 아이디입니다." });
    }

    // 중복된 user_email 검사
    const existingUserByEmail = await User.findOne({ where: { user_email: info.user_email } });
    if (existingUserByEmail) {
        return res.status(409).json({ error: "이미 사용 중인 이메일 주소입니다." })
    }

    // 비밀번호 암호화
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(info.user_password, saltRounds)
        info.user_password = hashedPassword;
        
    } catch (err) {
        console.error("비밀번호 암호화 오류 : ", err);
        return res.status(500).json({ error: "비밀번호 암호화 중 오류가 발생했습니다. 다시 시도해주세요." })
    }

    try {
        await User.create(info)
        res.status(201).json({ message: "회원가입이 완료되었습니다." })
    } catch ( error ) {
        // 실제 서버의 오류 내용을 그대로 전달하는 것은 보안 문제를 일으킬수도,, 수정
        console.error("회원가입 오류: ", error)
        res.status(500).json({ error: "회원가입 중 오류가 발생했습니다. 다시 시도해주세요." })
    }
}

/**
 * 회원 로그인
 */
const userLogin = async (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // info에 실패메세지가 담겨있음
            return res.status(400).json({ error: info.message })
        }

        // 사용자가 입력한 비밀번호와 데이터베이스의 암호화된 비밀번호 비교
        try {
            const isValidPassword = await bcrypt.compare(req.body.user_password, user.user_password);
            if (!isValidPassword) {
                return res.status(401).json({ error: "잘못된 비밀번호 입니다." })
            }
        } catch (error) {
            console.error("비밀번호 비교 중 오류: ", error)
            return res.status(500).json({ error: "비밀번호 검증 중 오류가 발생하였습니다."})
        }


        // 세션에 사용자 정보 입력
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            // 로그인 성공시 사용자 정보를 반환
            return res.status(200).json(user)
        })
    })(req, res, next);
}

/**
 * 로그아웃
 */
const userLogout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) { 
            console.error("세션 파기 중 오류 발생:", err);
            return res.status(500).json({ error: "로그아웃 중 오류가 발생했습니다." });
        }

        // 세션 쿠키 제거
        res.clearCookie('connect.sid', { path: '/' });
        res.status(200).json({ message: "로그아웃 되었습니다." });
    });
}

/**
 * 회원정보 수정
 */

/**
 * 회원 탈퇴
 */

/**
 * 회원 검색(TODO, 관리자 페이지 기능)
 */

/**
 * 회원 정보 검증 메서드
 * utils같은 폴더를 만들어서 따로 빼는게 맞는거 같긴 한데.. 추후 수정하자
 */
User.prototype.validPassword = function(password) {
    // compareSync()는 동기 실행이여서 compare로 변경
    return bcrypt.compare(password, this.user_password)
}

module.exports = {
    addUser,
    userLogin,
    userLogout,
}