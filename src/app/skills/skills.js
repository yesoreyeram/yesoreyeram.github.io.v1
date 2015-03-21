'use strict';

var skillsModule  = angular.module("sriramajeyam.skills",['ngRoute']);

skillsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/skills', { templateUrl: 'modules/skills/skills.html', controller: 'skillsCtrl' });
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