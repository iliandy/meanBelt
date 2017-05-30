app.factory("AnswerFactory", function($http) {
  var factory = {};

  factory.create = function(newAns, callback) {
    $http.post("/answers", newAns).then(callback);
  };
  factory.addLikes = function(answer_id, callback) {
    $http.put(`/answers/likes/${answer_id}`).then(callback);
  };

  return factory;
})
