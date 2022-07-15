const express=require('express');
const connect=require("./configs/db.js")
const Port = process.env.PORT || 2001
const app=express();
app.use(express.json());

const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)

const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)

app.use("/sudhir",(req,res) => {
    return res.send("chavhan")
})
app.listen(Port,async function(){
    try {
        // await connect();
           console.log(`Listening on ${Port}` )
    } catch (error) {
         console.log(error)
    }
})