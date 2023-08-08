const db = require('../models');
const User = db.users
const passport = require('passport');
const bcrypt = require('bcrypt');

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
        // 담당 대분류
        user_charge: req.body.user_charge,
        user_birthdate: req.body.user_birthdate,
        // 소속 사명(nullable)
        user_company: req.body.user_company,
        // 관리자 계정은 수동 생성
        is_admin: 0,
    };
    try {
        await User.create(info)
        res.status(200).json()
    } catch ( error ) {
        res.status(500).json({ error: message })
    }
}

/**
 * 회원 로그인
 */
const userLogin = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // info에 실패메세지가 담겨있음
            return res.status(400).json(info)
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
}