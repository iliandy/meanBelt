app.controller("QuestionsController", function(QuestionFactory, AnswerFactory, $cookies, $location, $routeParams) {
  console.log("Loaded QuestionsController...");
  var self = this;
  self.questions = [];
  self.errors = [];
  self.newQuestion = {};
  self.question = {};

  self.index = function() {
    QuestionFactory.index(function(res) {
      self.questions = res.data;
    });
  };

  self.create = function(newQuestion, user) {
    self.errors = [];

    // console.log(newQuestion);
    newQuestion.author = user;

    QuestionFactory.create(newQuestion, function(res) {
      console.log(res.data);
      // if there are errors in response, add each error message to errors array to display on front end
      if(res.data.errors) {
        for(key in res.data.errors) {
          var error = res.data.errors[key];
          self.errors.push(error.message);
        }
      }
      else {
        $location.url("/");
      }
    });   // end of QuestionFactory create method
    // clear our new Question object so user can re-enter form input
    self.newQuestion = {};
  };    // end of self.create method

  self.getUser = function() {
    self.currentUser = $cookies.get("user");
  };

  self.show = function() {
    // send question id to factory show method (http get to server to retrieve question)
    QuestionFactory.show($routeParams.id, function(res) {
      // set responded question to controller question object to be displayed
      self.question = res.data;
    });   // end of QuestionFactory show method
  };    // end of self.show method

  self.createAns = function(newAns, user, question_id) {
    self.errors = [];
    // creates empty newAns object if input is blank, otherwise creates error
    if(!newAns) {
      newAns = {};
    }

    newAns.author = user;
    newAns.question = question_id;
    console.log(newAns);

    AnswerFactory.create(newAns, function(res) {
      if(res.data.errors) {
        for(key in res.data.errors) {
          var error = res.data.errors[key];
          self.errors.push(error.message);
        }
      }
      else {
        $location.url("/");
      }
    });
    // clear new comment input
    self.newAns = {};

  };

  self.addLikes = function(answer_id) {
    AnswerFactory.addLikes(answer_id, self.show);
  }


});
