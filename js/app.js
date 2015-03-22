'use strict';

var thirdpartyDependencies = [	
	'ngRoute',
	'ngMaterial'
];

var myappDependencies = [	
	'sriramajeyam.home',
	'sriramajeyam.aboutme',
	'sriramajeyam.skills',
	'sriramajeyam.contactme',
	'sriramajeyam.bookmarks'
];

var sriramajeyamapp  = angular.module("sriramajeyam",thirdpartyDependencies.concat(myappDependencies));

sriramajeyamapp.config(['$routeProvider','$compileProvider', function($routeProvider,$compileProvider) {
	$compileProvider.debugInfoEnabled(false);
	$routeProvider.when('/', { templateUrl: 'modules/home/home.html', controller: 'HomeCtrl' });
  	$routeProvider.otherwise({redirectTo: '/'});
}]);

sriramajeyamapp.controller('appCtrl',['$scope',function($scope){
	$scope.myprofile = {
		"firstName" : "sriramajeyam",
		"lastName" : "sriramajeyam"
	}
	$scope.title ="Sriramajeyam Sugumaran Official website";
}]);

'use strict';

var homeModule  = angular.module("sriramajeyam.home",['ngRoute']);

homeModule.controller('HomeCtrl',['$scope','$http',function($scope,$http){
	$scope.title ="Sriramajeyam Sugumaran Official website";
	$http.get('http://feeds.delicious.com/v2/json/yesoreyeram').
	  success(function(data, status, headers, config) {
	  	$scope.deliciousBookmarks = data;
	    console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	    console.log("Error");
	  });
}]);
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