const express = require("express");
const router = express.Router();
const PostQuiz = require("../model/quizdata.model.js");

router.post("/", async (req, res) => {
  try {
    const data = await PostQuiz.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:value", async (req, res) => {
  console.log(req.params.value, "hello2");
  try {
    const Data = await PostQuiz.find({ title: req.params.value });
    console.log(Data, "hello3");
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
