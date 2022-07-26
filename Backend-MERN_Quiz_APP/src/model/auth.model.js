const mongoose = require('mongoose')
const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quizResult: [],
});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Points:Number,
    quizAttempted: [quizAttemptedSchema],
  })
  const User = new mongoose.model('User', userSchema)

  module.exports=User
