require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express()
const session = require('express-session');
const passport = require('passport');

const router = require('./routes/router')

require("./models/index");
const corsOption = {
    origin: "https://localhost:3000",
};

app.set("port", process.env.PORT || 3000);

// Middleware
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(session({
    // cryto의 randombytes로 추후 변경 예정
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport
require('./middleware/passport')(passport)

// routes
app.use('/', router)

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중")
})