var gifPartyDirs = angular.module("gifPartyDirs", []);

gifPartyDirs.directive("menu", ["$http", function($http) {
  return {
    restrict: "E",
    templateUrl: "app/views/menu.html",
    controller: function() {
      var menu = this;
      menu.items = [];

      $http.get("app/items.json").success(function(data) {
        menu.items = data.items;
      });
    },
    controllerAs: "menu"
  }
}]);
