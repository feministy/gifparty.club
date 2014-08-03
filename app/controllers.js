var gifPartyCtrls = angular.module("gifPartyCtrls", []);

gifPartyCtrls.controller('AngryController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/angry.json").success(function(data) {
      items.imgs = data;
  });
}]);