var gifPartyApp = angular.module("gifPartyApp", [
  'ngRoute',
  'gifPartyDirs',
  'gifPartyCtrls'
  ]);

gifPartyApp.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
      when("/angry", {
        templateUrl: "views/gifs.html",
        controller: "AngryController"
      })
  }]);