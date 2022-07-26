
const express=require("express")
const User = require("../model/auth.model.js")
const router =express.Router()

const Postquiz=require("../model/quizdata.model.js")

router.get("/",async(req,res)=>{
    try{
const Postquizdata=await Postquiz.find().lean().exec()
res.send(Postquizdata)
    }catch(err){
return res.status(500).send(err.message)
    }
})

module.exports = router