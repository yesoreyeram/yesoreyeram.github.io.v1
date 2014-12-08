'use strict';

var homeModule  = angular.module("sriramajeyam.home",['ngRoute']);

homeModule.controller('HomeCtrl',['$scope',function($scope){
	$scope.title ="Sriramajeyam Sugumaran Official website";
}]);