const express = require('express')
const router = express.Router()
const quizAdd=require("../model/quizdata.model.js")

 router.post("/",async (req,res)=>{
   
   try{
    const data=await quizAdd.create(req.body)
    res.status(200).json(data)
   }catch(err){
    res.status(400).json(err)
   }
});
module.exports =router