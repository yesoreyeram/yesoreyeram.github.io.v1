'use strict';

var sriramajeyamapp  = angular.module("sriramajeyam",['ngRoute','sriramajeyam.home']);

sriramajeyamapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', { templateUrl: 'modules/home/home.html', controller: 'HomeCtrl' });
  	$routeProvider.otherwise({redirectTo: '/'});
}]);

sriramajeyamapp.controller('appCtrl',['$scope',function($scope){
	$scope.title ="Sriramajeyam Sugumaran Official website";
}]);
