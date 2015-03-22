'use strict';

var homeModule  = angular.module("sriramajeyam.home",['ngRoute']);

homeModule.controller('HomeCtrl',['$scope','$http',function($scope,$http){
	$scope.title ="Sriramajeyam Sugumaran Official website";
	$http.get('http://feeds.delicious.com/v2/json/yesoreyeram').
	  success(function(data, status, headers, config) {
	  	$scope.deliciousBookmarks = data;
	    console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	    console.log("Error");
	  });
}]);