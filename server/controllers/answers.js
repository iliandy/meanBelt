var mongoose = require("mongoose");

var Answer = mongoose.model("Answer");
var Question = mongoose.model("Question");

module.exports = {
  index: function(req, res) {
    Answer.find({}, function(err, answers) {
      if(err) {
        return res.json(err);
      }
      return res.json(answers);
    });
  },

  create: function(req, res) {
    Answer.create(req.body, function(err, answer) {
      if(err) {
        return res.json(err);
      }
      Question.findByIdAndUpdate(req.body.question, { $push: { answers: answer._id }}, function(err, question) {
        if(err) {
          return res.json(err);
        }
        return res.json(answer);
      });       // end of Question id query
    });         // end of Answer create
  },

  show: function(req, res) {
    Answer.findById(req.params.id, function(err, answer) {
      if(err) {
        return res.json(err);
      }
      return res.json(answer);
    });   // end Answer id query
  },

  addLikes: function(req, res) {
    // .findByIdAndUpdate method
    Answer.findByIdAndUpdate(req.params.id, { $inc: { "likes": 1 }}, { new: true },  function(err, answer) {
      if(err) {
        return res.json(err);
      }
      return res.json(answer);
    });
  },

};
