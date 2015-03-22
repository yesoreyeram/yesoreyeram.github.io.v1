'use strict';

var module404  = angular.module("sriramajeyam.module404",['ngRoute']);

module404.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/404', { templateUrl: 'modules/404/404.html', controller: 'Ctrl404' });
  	$routeProvider.otherwise({redirectTo: '/404'});
}]);

module404.controller('Ctrl404',['$scope',function($scope){
}]);
