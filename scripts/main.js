var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider',
 function($routeProvider) {
    $routeProvider.
       when('/main', {
          templateUrl: 'main.htm',
          controller: 'mainController'
       }).
       when('/viewStudents', {
          templateUrl: 'viewStudents.htm',
          controller: 'ViewStudentsController'
       }).
       otherwise({
          redirectTo: '/addStudent'
       });
 }]);

 mainApp.controller('mainController', function($scope) {
    $scope.message = "This page will be used to display add student form";
     
     $scope.companyData = function(){
         console.log("hello");
         var companyName = $("#companyName").value;
         console.log(companyName);
     }
     
     
 });

 mainApp.controller('ViewStudentsController', function($scope) {
    $scope.message = "This page will be used to display all the students";
 });