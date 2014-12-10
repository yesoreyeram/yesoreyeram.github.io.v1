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