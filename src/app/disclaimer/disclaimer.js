'use strict';

var disclaimerModule  = angular.module("sriramajeyam.disclaimer",['ngRoute']);

disclaimerModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/disclaimer', { templateUrl: 'modules/disclaimer/disclaimer.html', controller: 'disclaimerCtrl' });
}]);

disclaimerModule.controller('disclaimerCtrl',['$scope',function($scope){
	$scope.title = "Disclaimer";

}]);