const express = require('express')
const router = express.Router()
const PostUser=require("../model/userdata.model.js")



router.post("/:id", async (req, res) => {
    console.log(req.params.id, "hello");
    try {
      const data = await PostUser.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: {
            quizAttempted: {
              $each: [{ quizId: req.body.quizId, quizResult: req.body.quizResult }],
            },
          },
        },
        { new: true }
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports =router