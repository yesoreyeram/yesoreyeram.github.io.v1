'use strict';

var articlesModule  = angular.module("sriramajeyam.articles",['ngRoute','ngSanitize']);

articlesModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/articles', { templateUrl: 'modules/articles/articles.html', controller: 'articlesCtrl' });
	$routeProvider.when('/blog', { templateUrl: 'modules/articles/articles.html', controller: 'articlesCtrl' });
	$routeProvider.when('/article/:slug', { templateUrl: 'modules/articles/article.html', controller: 'articleCtrl' });
}]);

articlesModule.controller('articlesCtrl',['$scope','$http',function($scope,$http){
	$scope.title = "Articles";
	var blogURL ="http://yesoreyeram-yesoreyeram.rhcloud.com/?json=1&callback=JSON_CALLBACK";
	$http.jsonp(blogURL).success(function(data){
		$scope.blogArticles = data.posts;
	}).error(function(){});
}]);
articlesModule.controller('articleCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.slug = $routeParams.slug;
	var articleURL ="http://yesoreyeram-yesoreyeram.rhcloud.com/"+$routeParams.slug+"/?json=1&callback=JSON_CALLBACK";
	$http.jsonp(articleURL).success(function(data){
		$scope.article = data.post;
	}).error(function(){});
}]);