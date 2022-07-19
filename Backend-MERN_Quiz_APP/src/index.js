const express=require('express');
const connect=require("./configs/db.js")
const Port = process.env.PORT || 3755
const app=express();
app.use(express.json());


const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)

const quizAdd=require("./controller/quizAdd.controller.js")
app.use("/admin",quizAdd)

const quiz=require("./controller/displayQuiz.controller.js")
app.use("/api",quiz)


app.listen(Port,async function(){
    try {
        await connect();
           console.log(`Listening on ${Port}` )
    } catch (error) {
         console.log(err)
    }
})