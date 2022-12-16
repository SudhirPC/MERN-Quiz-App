const express=require('express');
const connect=require("./configs/db.js")
const bodyParser = require("body-parser");
const Port = process.env.PORT || 3755
var cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)

const quizAdd=require("./controller/quizAdd.controller.js")
app.use("/admin",quizAdd)

const quiz=require("./controller/displayQuiz.controller.js")
app.use("/quiz",quiz)

const getquiz = require("./controller/quizAdd.controller.js")
app.use("/quiz",getquiz)

const user=require("./controller/auth.controller.js")
app.use("/user",user)

const userResult=require("./controller/userData.controller.js")
app.use("/userResult",userResult)

app.listen(Port,async function(){
    try {
        await connect();
           console.log(`Listening on ${Port}` )
    } catch (error) {
         console.log(err)
    }
})


