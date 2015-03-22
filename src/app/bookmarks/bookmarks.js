'use strict';

var bookmarksModule  = angular.module("sriramajeyam.bookmarks",['ngRoute']);

bookmarksModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/bookmarks', { templateUrl: 'modules/bookmarks/bookmarks.html', controller: 'bookmarksCtrl' });
}]);

bookmarksModule.controller('bookmarksCtrl',['$scope','$http',function($scope,$http){
	$scope.title = "My Bookmarks";
	$http.get('http://feeds.delicious.com/v2/json/yesoreyeram').
	  success(function(data, status, headers, config) {
	  	$scope.deliciousBookmarks = data;
	    console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	    console.log("Error");
	  });
}]);