var gifPartyApp = angular.module("gifPartyApp", [
  'ngRoute',
  'gifPartyDirectives',
  'gifPartyControllers'
  ]);

gifPartyApp.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
      when("/angry", {
        templateUrl: "views/gifs.html",
        controller: "AngryController"
      })
  }]);