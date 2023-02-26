const express = require('express')
const router = express.Router()
const User=require("../model/auth.model.js")

router.post('/login', (req, res) => {
    const {  email, password } = req.body
       User.findOne({email:email},(err,user)=>{
           if(user){
                if(password===user.password){
                  console.log("login successfull")
                    res.send({ message:"Login Succesfully",user:user})
                }else{
                    res.send({message:"Invalid Password"})
                }
           }else{
            res.send({message:"User Not Regitered "})
           }
       })
})
router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User Already Registered' })
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
          res.send({ message: 'Successfully Registered' })
        }
      })
    }
  })
})
//  ------------ get data of user by admin controller-----------
router.get('/getuser', async (req, res) => {
  try {
    const data = await User.find({}).lean().exec()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})

//  ------------delete user by admin controller-----------

router.delete('/:id',async (req, res) => {
  User.deleteOne({_id:req.params.id}).then(()=>{
   res.send("user deleted")
  }).catch((err) => {
   res.send("An error Occured")
  })
})



module.exports = router