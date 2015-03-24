(function () {
"use strict";

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
	};
	$scope.title ="Sriramajeyam Sugumaran Official website";
	$scope.hideLoader = true;
	$scope.$on('hideLoader', function(event, data) { 
		$scope.hideLoader = data;
	});
	var a ="sds"
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
}());