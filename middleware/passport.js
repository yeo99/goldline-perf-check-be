const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/Users')

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id)
            .then(user => done(null, user))
            .catch(err => done(err))
    });

    passport.use(new LocalStrategy({
        // 키값을 input form의 속성과 일치시켜야 함
        usernameField: 'user_id',
        passwordField: 'user_password'
    }, (user_id, user_password, done) => {
        User.findOne({
            where : { user_id }
        })
        .then(user => {
            if (!user) {
                return done(null, false, { message : '잘못된 아이디 입니다.' })
            }
            if (!user.validPassword(user_password)) {
                return done(null, false, {message : '잘못된 비밀번호 입니다.'})
            }
            return done(null, user)
        })
        .catch(err => done(err))
    }))
}