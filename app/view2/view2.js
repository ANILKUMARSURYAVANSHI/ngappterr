'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view3', {
    template: 'Asuryavanshi'
  });
}])

.controller('View2Ctrl', ['$scope', '$location',function($scope, $location) {
	 $scope.name = localStorage.myname;
}]);