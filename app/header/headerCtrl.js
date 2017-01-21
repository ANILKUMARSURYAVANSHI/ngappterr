'use strict';

angular
    .module('myApp')
    .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope','$http', '$location'];

function headerCtrl($scope, $http, $location) { 
 var vm = this;
    
     vm.title = "Terral Site ";     
    
       
   
};