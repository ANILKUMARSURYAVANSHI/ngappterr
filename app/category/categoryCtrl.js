'use strict';

angular
    .module('myApp')
    .controller('categoryCtrlMain', categoryCtrlMain);

    categoryCtrlMain.$inject = ['$scope','$http', '$location'];

function categoryCtrlMain($scope, $http, $location) { 
 var vm = this;
     vm.name = {};
     vm.testModel = "Harsh Vardhan Singh";     
     var vm = this;   
     vm.sendMessage = function() { 
    	 alert('Hiii');
     };   
     vm.title = 'Some Title';   
   
};