import mongoose from "mongoose";
const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "PostQuiz" },
  quizResult: [],
});
const postUserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  quizAttempted: [quizAttemptedSchema],
});

const PostUser = mongoose.model("PostUser", postUserSchema);
export default PostUser;