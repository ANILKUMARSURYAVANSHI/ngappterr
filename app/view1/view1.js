'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
$rootScope.myfullname = ' Kumar';
	$scope.store = function(){
		localStorage.myname = $scope.name;
		$location.path('/view2');
		$rootScope.myfullname = 'Anil Kumar';
	};

	



}]);