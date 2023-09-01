require('dotenv').config()
const express = require('express')
const cors = require("cors")
const path = require('path');
const app = express()
const session = require('express-session');
const passport = require('passport');

const router = require('./routes/router')

require("./models/index");
const corsOption = {
    origin: `http://127.0.0.1:3000`,
    credentials: true,
};

app.set("port", process.env.PORT || 5000);

// Middleware
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(session({
    // cryto의 randombytes로 추후 변경 예정
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60, // 한 시간으로 설정
        secure: process.env.NODE_ENV === 'production',
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport
require('./middleware/passport')(passport)

// 정적 파일 사용
app.use(express.static(path.join(__dirname, '../gold-line-perf-check-fe/build')));

// routes
app.use('/', router)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../gold-line-perf-check-fe/build/index.html'));
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중")
})