'use strict';

var aboutmeModule  = angular.module("sriramajeyam.aboutme",['ngRoute']);

aboutmeModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/aboutme', { templateUrl: 'modules/aboutme/aboutme.html', controller: 'aboutmeCtrl' });
}]);

aboutmeModule.controller('aboutmeCtrl',['$scope',function($scope){
	$scope.socialPrcense = [
		{"name":"Twitter","url":"https://twitter.com/yesoreyeram"},
		{"name":"Facebook","url":"https://www.facebook.com/yesoreyeram"},
		{"name":"Google+","url":"https://plus.google.com/+SriramajeyamSugumaran/"},
		{"name":"Github","url":"https://github.com/yesoreyeram"},
		{"name":"LinkedIn","url":"https://www.linkedin.com/in/sriramajeyam"},
		{"name":"StackOverFlow","url":"http://stackoverflow.com/users/1576253/sriramajeyam-sugumaran"},
	];
}]);