'use strict';

var sriramajeyamapp  = angular.module("sriramajeyam",['ngRoute','sriramajeyam.home']);

sriramajeyamapp.config(['$routeProvider','$compileProvider', function($routeProvider,$compileProvider) {
	$compileProvider.debugInfoEnabled(false);
	$routeProvider.when('/', { templateUrl: 'modules/home/home.html', controller: 'HomeCtrl' });
  	$routeProvider.otherwise({redirectTo: '/'});
}]);

sriramajeyamapp.controller('appCtrl',['$scope',function($scope){
	$scope.title ="Sriramajeyam Sugumaran Official website";
}]);
