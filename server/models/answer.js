var mongoose = require("mongoose");

var AnswerSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  answer: {
    type: String,
    required: [true, "Answer input can't be blank."],
    minlength: [5, "Answer must be at least 5 characters."],
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

}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);
