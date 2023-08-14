/**
 * 회원가입 검증 로직
 */

/**
 * 이메일 검증 로직
 */
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

/**
 * 문자열 길이 검증 로직(input)
 */
const isValidLength = (input, min, max) => {
    return input.length >= min && input.length <= max;
}

/**
 * 비밀번호 검증 로직
 * 알파벳, 숫자, 특수문자를 포험하여 8자~16자
 */
const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return regex.test(password)
}

module.exports = {
    isValidEmail,
    isValidLength,
    isValidPassword
}