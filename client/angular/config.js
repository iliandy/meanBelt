var app = angular.module("app", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/login", {
    templateUrl: "partials/login.html",
    controller: "UsersController as UC",
  })
  .when("/", {
    templateUrl: "partials/questions.html",
    controller: "UsersController as UC",
  })
  .when("/ques/new_ques", {
    templateUrl: "partials/new_question.html",
    controller: "UsersController as UC",
  })
  .when("/ques/:id", {
    templateUrl: "partials/show.html",
    controller: "UsersController as UC",
  })
  .when("/ques/:id/ans", {
    templateUrl: "partials/new_answer.html",
    controller: "UsersController as UC",
  })

  .otherwise({ redirectTo: "/login.html" });


});
