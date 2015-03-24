(function () {
'use strict';

var bookmarksModule  = angular.module("sriramajeyam.bookmarks",['ngRoute']);

bookmarksModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/bookmarks', { templateUrl: 'modules/bookmarks/bookmarks.html', controller: 'bookmarksCtrl' });
	$routeProvider.when('/bookmarks/:bookmarkTag', { templateUrl: 'modules/bookmarks/bookmarks.html', controller: 'bookmarksbyTagCtrl' });
}]);

bookmarksModule.controller('bookmarksCtrl',['$scope','$http',function($scope,$http){
	$scope.title = "My Bookmarks";
	$scope.isFeedsLoaded = false;
	$scope.isTagsLoaded = false;

	var feedURl ="http://feeds.delicious.com/v2/json/yesoreyeram?callback=JSON_CALLBACK";
	$http.jsonp(feedURl).success(function(data){
		$scope.deliciousBookmarks = data;
		$scope.isFeedsLoaded = true;
		$scope.$emit('hideLoader', $scope.isFeedsLoaded *$scope.isTagsLoaded  );
	}).error(function(){});


	var tagsUrl ="http://feeds.delicious.com/v2/json/tags/yesoreyeram?callback=JSON_CALLBACK";
	var tagsCollection =[];
	$http.jsonp(tagsUrl).success(function(data){
		_.map(_.keys(data),function(a){
			if(a != "for:@twitter" && a != "!fromtwitter") {
				tagsCollection.push({"TagName": a ,"Count":data[a]});
			}
		});
		$scope.deliciousTags =  _.first(_.sortBy(tagsCollection, 'Count').reverse(),20) ; 
		$scope.isTagsLoaded = true;
		$scope.$emit('hideLoader', $scope.isFeedsLoaded *$scope.isTagsLoaded  );
	}).error(function(){});

}]);
bookmarksModule.controller('bookmarksbyTagCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.title = "My Bookmarks";
	$scope.isFeedsLoaded = false;
	$scope.isTagsLoaded = false;

	var feedURl ="http://feeds.delicious.com/v2/json/yesoreyeram/"+$routeParams.bookmarkTag+"?callback=JSON_CALLBACK";
	$http.jsonp(feedURl).success(function(data){
		$scope.deliciousBookmarks = data;
		$scope.isFeedsLoaded = true;
		$scope.$emit('hideLoader', $scope.isFeedsLoaded * $scope.isTagsLoaded  );
	}).error(function(){});

	
	var tagsUrl ="http://feeds.delicious.com/v2/json/tags/yesoreyeram?callback=JSON_CALLBACK";
	var tagsCollection =[];
	$http.jsonp(tagsUrl).success(function(data){
		_.map(_.keys(data),function(a){
			if(a != "for:@twitter" && a != "!fromtwitter") {
				tagsCollection.push({"TagName": a ,"Count":data[a]});
			}
		});
		$scope.deliciousTags =  _.first(_.sortBy(tagsCollection, 'Count').reverse(),20) ;
		$scope.isTagsLoaded = true;
		$scope.$emit('hideLoader', $scope.isFeedsLoaded *$scope.isTagsLoaded  );
	}).error(function(){});

}]);
}());