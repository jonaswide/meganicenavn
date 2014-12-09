var app = angular.module('app', ['ui.router', 'ngAnimate']);

// Routes

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      views: {
        "viewA": { templateUrl: "view/index.viewA.html" },
        "viewB": { templateUrl: "view/index.viewB.html" }
      }
    })
    .state('om', {
      url: "/om",
      views: {
        "viewA": { templateUrl: "view/om.viewA.html" },
        "viewB": { templateUrl: "view/om.viewB.html" }
      }
    })
    .state('referencer', {
      url: "/referencer",
      views: {
        "viewA": { templateUrl: "view/referencer.viewA.html" },
        "viewB": { templateUrl: "view/referencer.viewB.html" }
      }
    })
    .state('holdet', {
      url: "/holdet",
      views: {
        "viewA": { templateUrl: "view/holdet.viewA.html" },
        "viewB": { templateUrl: "view/holdet.viewB.html" }
      }
    })
    .state('kontakt', {
      url: "/kontakt",
      views: {
        "viewA": { templateUrl: "view/kontakt.viewA.html" },
        "viewB": { templateUrl: "view/kontakt.viewB.html" }
      }
    });

    $urlRouterProvider.otherwise("/");
});
app.controller('navCtrl', ['$scope', function($scope){

$scope.checkToggle = 1;

$scope.setToggle = function(){ 
  if ($scope.checkToggle == 1){
    $scope.toggleClass = "toggle-left";
    $scope.checkToggle = 2;
  } else {
    $scope.toggleClass = "toggle-right";
    $scope.checkToggle = 1;
  }
};

$scope.setToggleRight = function(){ 
    $scope.toggleClass = "toggle-right";
    $scope.checkToggle = 1;  
};
}]);

