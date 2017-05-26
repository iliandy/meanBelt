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
  .otherwise({ redirectTo: "/login.html" });


});
