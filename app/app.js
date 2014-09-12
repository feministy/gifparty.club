var gifPartyApp = angular.module("gifPartyApp", [
  'ngRoute',
  'gifPartyDirs',
  'gifPartyCtrls'
  ]);

gifPartyApp.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
      when("/angry", {
        templateUrl: "/app/views/gifs.html",
        controller: "AngryController",
        controllerAs: "ctrl"
      })
      .when("/annoyed", {
        templateUrl: "/app/views/gifs.html",
        controller: "AnnoyedController",
        controllerAs: "ctrl"
      })
      .when("/comforting", {
        templateUrl: "/app/views/gifs.html",
        controller: "ComfortingController",
        controllerAs: "ctrl"
      })
      .when("/cute", {
        templateUrl: "/app/views/gifs.html",
        controller: "CuteController",
        controllerAs: "ctrl"
      })
      .when("/dancing", {
        templateUrl: "/app/views/gifs.html",
        controller: "DancingController",
        controllerAs: "ctrl"
      })
      .when("/evil", {
        templateUrl: "/app/views/gifs.html",
        controller: "EvilController",
        controllerAs: "ctrl"
      })
      .when("/fuck_you", {
        templateUrl: "/app/views/gifs.html",
        controller: "FuckYouController",
        controllerAs: "ctrl"
      })
      .when("/funny", {
        templateUrl: "/app/views/gifs.html",
        controller: "FunnyController",
        controllerAs: "ctrl"
      })
      .when("/happy", {
        templateUrl: "/app/views/gifs.html",
        controller: "HappyController",
        controllerAs: "ctrl"
      })
      .when("/nope", {
        templateUrl: "/app/views/gifs.html",
        controller: "NopeController",
        controllerAs: "ctrl"
      })
      .when("/punz", {
        templateUrl: "/app/views/gifs.html",
        controller: "PunzController",
        controllerAs: "ctrl"
      })
      .when("/sad", {
        templateUrl: "/app/views/gifs.html",
        controller: "SadController",
        controllerAs: "ctrl"
      })
      .when("/victory", {
        templateUrl: "/app/views/gifs.html",
        controller: "VictoryController",
        controllerAs: "ctrl"
      })
      .when("/whatever", {
        templateUrl: "/app/views/gifs.html",
        controller: "WhateverController",
        controllerAs: "ctrl"
      })
      .when("/wtf", {
        templateUrl: "/app/views/gifs.html",
        controller: "WtfController",
        controllerAs: "ctrl"
      })
  }]);