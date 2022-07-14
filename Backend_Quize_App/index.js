
const express=require('express');
const connect=require("./db.js")
const Port = process.env.PORT || 2001
const app=express();
app.use(express.json());


const loginAuth=require("./src/controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./src/controller/auth.controller.js")
app.use("/",RegisterAuth)




app.listen(Port,async function(){
    try {
        await connect();
           console.log(`Listening on ${Port}` )
    } catch (error) {
         console.log(err)
    }
})