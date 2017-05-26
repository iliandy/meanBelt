app.controller("UsersController", function($cookies, $location) {
  console.log("Loaded UsersController...");
  var self = this;
  self.loginErrors = [];
  self.currentUser = {};

  self.session = function() {
    // User login status
    var loginUser = $cookies.get("user");
    // if not logged in, redirects user to /login (login.html)
    if(!loginUser) {
      $location.url("/login");
    }
  };

  self.login = function(loginUser) {
    self.loginErrors = [];
    // set loginUser to blank str if blank input
    if(!loginUser) {
      loginUser = "";
    }

    // if there are errors in response, add each error message to regErrors array to display on front end
    if(loginUser.length == 0) {
      self.loginErrors.push("Name input can't be blank");
    }
    else if(loginUser.length < 2) {
      self.loginErrors.push("Name input must be at least 2 characters.");
    }
    else{
      // login successful, save User object into session cookie
      $cookies.put("user", loginUser);
      // redirect to questions dashboard
      $location.url("/");
    }
    // clear login user input
    self.loginUser = "";
  };

  self.logout = function() {
    $cookies.remove("user");
    $location.url("/login");
  };

  self.getUser = function() {
    self.currentUser = $cookies.get("user");
  };


});
