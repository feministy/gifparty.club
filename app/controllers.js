var gifPartyCtrls = angular.module("gifPartyCtrls", []);

gifPartyCtrls.controller('AngryController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/angry.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('AnnoyedController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/annoyed.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('ComfortingController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/comforting.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('CuteController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/cute.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('DancingController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/dancing.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('EvilController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/evil.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('FuckYouController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/fuck_you.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('FunnyController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/funny.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('HappyController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/happy.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('NopeController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/nope.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('SadController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/sad.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('VictoryController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/victory.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('WhateverController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/whatever.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);

gifPartyCtrls.controller('WtfController', ['$http', function($http) {
  var items = this;
  items.imgs = {};

  $http.get("http://gifserver.herokuapp.com/api/wtf.json").success(function(data) {
      items.imgs = data;
  });

  this.displayUrl = function displayUrl(image) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", image);
  }
}]);