(function () {
'use strict';

var workModule  = angular.module("sriramajeyam.work",['ngRoute']);

workModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/skills', { templateUrl: 'modules/work/work.html', controller: 'workCtrl' });
	$routeProvider.when('/work', { templateUrl: 'modules/work/work.html', controller: 'workCtrl' });
}]);

workModule.controller('workCtrl',['$scope',function($scope){
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
		{"name":"ElasticSearch","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"Kibana","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
		{"name":"Logstash","type":"","since":"","interestlevel":"","experiencelevel":"","rating":"","logo":"","url":""},
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
}());