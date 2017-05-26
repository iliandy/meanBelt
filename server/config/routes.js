var Questions = require("../controllers/questions");
var Answers = require("../controllers/answers");

module.exports = function(app) {
  // Question routes
  app.get("/questions", Questions.index);
  app.post("/questions", Questions.create);
  app.get("/questions/:id", Questions.show);
  // Answer routes
  app.get("/answers", Answers.index);
  app.post("/answers", Answers.create);
  app.get("/answers/:id", Answers.show);
  app.put("/answers/likes/:id", Answers.addLikes);
};
