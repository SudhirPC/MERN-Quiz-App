const mongoose = require('mongoose')
const questionArr = new mongoose.Schema({
    title: { type: String },
    que: { type: String },
    answer: [],
    correctAnswer: { type: String },
  });

  const postQuizSchema = new mongoose.Schema({
    title: { type: String },
    questionArray: [questionArr],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });