'use strict';

var homeModule  = angular.module("sriramajeyam.home",['ngRoute']);

homeModule.controller('HomeCtrl',['$scope','$http','_',function($scope,$http,_){
	$scope.title ="Sriramajeyam Sugumaran Official website";
	var feedURl ="http://feeds.delicious.com/v2/json/yesoreyeram?callback=JSON_CALLBACK";
	$http.jsonp(feedURl).success(function(data){
		$scope.deliciousBookmarks = _.first(data,5);
		console.log( _.first(data,5));
	}).error(function(){});
}]);

homeModule.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});