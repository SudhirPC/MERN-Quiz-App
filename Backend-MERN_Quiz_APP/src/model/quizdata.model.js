const mongoose = require('mongoose')
const questionArr = new mongoose.Schema({
  title: { type: String },
  que: { type: String },
    answer: [],
    correctAnswer: { type: String },
  });

  const postQuizSchema = new mongoose.Schema({
    title: { type: String },
    questions: [questionArr],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });

  const Postquiz = new mongoose.model('Postquiz', postQuizSchema)
  
  module.exports = Postquiz