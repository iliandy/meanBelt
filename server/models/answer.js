var mongoose = require("mongoose");

var AnswerSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  answer: {
    type: String,
    required: [true, "Answer input can't be blank."],
    minlenth: [5, "Answer must be at least 5 characters."],
  },
  details: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },

});

mongoose.model("Answer", AnswerSchema);
