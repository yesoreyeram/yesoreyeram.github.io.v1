(function () {
'use strict';

var homeModule  = angular.module("sriramajeyam.home",['ngRoute']);

homeModule.controller('HomeCtrl',['$scope','$http','_',function($scope,$http,_){

	$scope.title ="Sriramajeyam Sugumaran Official website";

	var feedURl ="http://feeds.delicious.com/v2/json/yesoreyeram?callback=JSON_CALLBACK";
	$http.jsonp(feedURl).success(function(data){
		$scope.deliciousBookmarks = _.first(data,5);
	}).error(function(){});

	var blogURL ="http://yesoreyeram-yesoreyeram.rhcloud.com/?json=1&callback=JSON_CALLBACK";
	$http.jsonp(blogURL).success(function(data){
		$scope.blogArticles = _.first(data.posts,5);
	}).error(function(){});
}]);

homeModule.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});
}());