const express = require('express')
const cors = require("cors")
const app = express()

require("./models/index");

const corsOption = {
    origin: "https://localhost:3000",
};

app.set("port", process.env.PORT || 3000);

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.get("/", (req, res) => {
    res.json({ message: "hello world" })
})

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중")
})