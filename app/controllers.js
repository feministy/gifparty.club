var gifPartyCtrls = angular.module("gifPartyCtrls", []);

gifPartyCtrls.controller('AngryController', ['$http', function($http) {
  var items = this;
  items.images = [];
}]);