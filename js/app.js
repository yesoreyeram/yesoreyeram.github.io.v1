'use strict';

var thirdpartyDependencies = [	
	'ngRoute'
];

var myappDependencies = [	
	'sriramajeyam.home',
	'sriramajeyam.aboutme',
	'sriramajeyam.skills',
	'sriramajeyam.contactme',
	'sriramajeyam.bookmarks',
	'sriramajeyam.disclaimer',
	'sriramajeyam.articles',
	'sriramajeyam.module404'
];

var sriramajeyamapp  = angular.module("sriramajeyam",thirdpartyDependencies.concat(myappDependencies));

sriramajeyamapp.config(['$routeProvider','$compileProvider', function($routeProvider,$compileProvider) {
	$compileProvider.debugInfoEnabled(false);
	$routeProvider.when('/', { templateUrl: 'modules/home/home.html', controller: 'HomeCtrl' });
}]);

sriramajeyamapp.controller('appCtrl',['$scope',function($scope){
	$scope.myprofile = {
		"firstName" : "sriramajeyam",
		"lastName" : "sriramajeyam"
	}
	$scope.title ="Sriramajeyam Sugumaran Official website";
	$scope.hideLoader = true;
	$scope.$on('hideLoader', function(event, data) { 
		$scope.hideLoader = data;
	});
	$scope.$on('$routeChangeStart', function(next, current) { 
		if(current.$$route.originalPath == "/bookmarks" || 
			current.$$route.originalPath == "/bookmarks/:bookmarkTag" ||
			current.$$route.originalPath == "/articles"|| 
			current.$$route.originalPath == "/article/:slug"
			)
		{
			$scope.hideLoader =false;
		}
 });
}]);

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
'use strict';

var aboutmeModule  = angular.module("sriramajeyam.aboutme",['ngRoute']);

aboutmeModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/aboutme', { templateUrl: 'modules/aboutme/aboutme.html', controller: 'aboutmeCtrl' });
}]);

aboutmeModule.controller('aboutmeCtrl',['$scope',function($scope){
	$scope.socialPrcense = [
		{"name":"Twitter","url":"https://twitter.com/yesoreyeram","icon":"twitter"},
		{"name":"Facebook","url":"https://www.facebook.com/yesoreyeram","icon":"facebook"},
		{"name":"Google+","url":"https://plus.google.com/+SriramajeyamSugumaran/","icon":"google-plus"},
		{"name":"Github","url":"https://github.com/yesoreyeram","icon":"github"},
		{"name":"LinkedIn","url":"https://www.linkedin.com/in/sriramajeyam","icon":"linkedin"},
		{"name":"StackOverFlow","url":"http://stackoverflow.com/users/1576253/sriramajeyam-sugumaran","icon":"stack-overflow"},
		{"name":"Delicious","url":"https://delicious.com/yesoreyeram","icon":"delicious"},
	];
}]);
'use strict';

var skillsModule  = angular.module("sriramajeyam.skills",['ngRoute']);

skillsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/skills', { templateUrl: 'modules/skills/skills.html', controller: 'skillsCtrl' });
	$routeProvider.when('/work', { templateUrl: 'modules/skills/skills.html', controller: 'skillsCtrl' });
}]);

skillsModule.controller('skillsCtrl',['$scope',function($scope){
$scope.skills = [
		{"name":"HTML","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"CSS","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"JavaScript","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"AngularJS","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"NodeJS","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"ExpressJS","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"MongoDB","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"GruntJS","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"JQuery","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
	];
$scope.tools = [
		{	"Name" : "Visual Studio" },
		{	"Name" : "Dynatrace AJAX" },
		{	"Name" : "Dottrace" },
		{	"Name" : "HTTPWatch" },
		{	"Name" : "Chrome Dev Tools" },
		{	"Name" : "Sublime Text" },
		{	"Name" : "Fiddler" },
		{	"Name" : "TFS" },
		{	"Name" : "Git" },
	];
}]);
'use strict';

var contactmeModule  = angular.module("sriramajeyam.contactme",['ngRoute']);

contactmeModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/contact', { templateUrl: 'modules/contactme/contactme.html', controller: 'contactmeCtrl' });
	$routeProvider.when('/contactme', { templateUrl: 'modules/contactme/contactme.html', controller: 'contactmeCtrl' });
}]);

contactmeModule.controller('contactmeCtrl',['$scope',function($scope){

}]);
'use strict';

var bookmarksModule  = angular.module("sriramajeyam.bookmarks",['ngRoute']);

bookmarksModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/bookmarks', { templateUrl: 'modules/bookmarks/bookmarks.html', controller: 'bookmarksCtrl' });
	$routeProvider.when('/bookmarks/:bookmarkTag', { templateUrl: 'modules/bookmarks/bookmarks.html', controller: 'bookmarksbyTagCtrl' });
}]);

bookmarksModule.controller('bookmarksCtrl',['$scope','$http',function($scope,$http){
	$scope.title = "My Bookmarks";

	var feedURl ="http://feeds.delicious.com/v2/json/yesoreyeram?callback=JSON_CALLBACK";
	$http.jsonp(feedURl).success(function(data){
		$scope.deliciousBookmarks = data;
		$scope.$emit('hideLoader', true);
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
		$scope.$emit('hideLoader', true);
	}).error(function(){});

}]);
bookmarksModule.controller('bookmarksbyTagCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.title = "My Bookmarks";

	var feedURl ="http://feeds.delicious.com/v2/json/yesoreyeram/"+$routeParams.bookmarkTag+"?callback=JSON_CALLBACK";
	$http.jsonp(feedURl).success(function(data){
		$scope.deliciousBookmarks = data;
		$scope.$emit('hideLoader', true);
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
		$scope.$emit('hideLoader', true); 
	}).error(function(){});

}]);
'use strict';

var disclaimerModule  = angular.module("sriramajeyam.disclaimer",['ngRoute']);

disclaimerModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/disclaimer', { templateUrl: 'modules/disclaimer/disclaimer.html', controller: 'disclaimerCtrl' });
}]);

disclaimerModule.controller('disclaimerCtrl',['$scope',function($scope){
	$scope.title = "Disclaimer";

}]);
'use strict';

var articlesModule  = angular.module("sriramajeyam.articles",['ngRoute','ngSanitize']);

articlesModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/articles', { templateUrl: 'modules/articles/articles.html', controller: 'articlesCtrl' });
	$routeProvider.when('/blog', {redirectTo: '/articles'});
	$routeProvider.when('/article/:slug', { templateUrl: 'modules/articles/article.html', controller: 'articleCtrl' });
}]);

articlesModule.controller('articlesCtrl',['$scope','$http',function($scope,$http){
	$scope.title = "Articles";
	var blogURL ="http://yesoreyeram-yesoreyeram.rhcloud.com/?json=1&callback=JSON_CALLBACK";
	$http.jsonp(blogURL).success(function(data){
		$scope.blogArticles = data.posts;		
		$scope.$emit('hideLoader', true);
	}).error(function(){});
}]);
articlesModule.controller('articleCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.slug = $routeParams.slug;
	var articleURL ="http://yesoreyeram-yesoreyeram.rhcloud.com/"+$routeParams.slug+"/?json=1&callback=JSON_CALLBACK";
	$http.jsonp(articleURL).success(function(data){
		$scope.article = data.post;
		$scope.$emit('hideLoader', true);
	}).error(function(){});
}]);
'use strict';

var module404  = angular.module("sriramajeyam.module404",['ngRoute']);

module404.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/404', { templateUrl: 'modules/404/404.html', controller: 'Ctrl404' });
  	$routeProvider.otherwise({redirectTo: '/404'});
}]);

module404.controller('Ctrl404',['$scope',function($scope){
}]);
