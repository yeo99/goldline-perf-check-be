const db = require('../models');
const User = db.users

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
        user_company: req.body.user_company,
        // 대분류까지의 분야를 추가해야함
        // 생년월일도 받아야할듯. 휴대번호 인증까지는 안되니까...
        is_admin: 0,
    };
    try {
        const user = await User.create(info)
        res.status(200).json()
    } catch ( error ) {
        res.status(500).json({ error: message })
    }
}

/**
 * 회원 로그인
 */
const userLogin = async (req, res) => {
    
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

module.exports = {
    addUser,
}