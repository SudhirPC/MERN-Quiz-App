const express = require('express')
const router = express.Router()
const User=require("../model/auth.model.js")

router.post('/login', (req, res) => {
    const {  email, password } = req.body
       User.findOne({email:email},(err,user)=>{
           if(user){
                if(password===user.password){
                    res.send({ message:"login succesfully",user:user})
                }else{
                    res.send({message:"Password didnt match"})
                }
           }else{
            res.send({message:"User not Regiter"})
           }
       })
})
router.post('/register', (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'USer already Registered' })
    } else {
      const user = new User({
        name,
        email,
        password,
      })
      user.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'Successfully Registerd' })
        }
      })
    }
  })
})
module.exports = router