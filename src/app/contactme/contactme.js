'use strict';

var contactmeModule  = angular.module("sriramajeyam.contactme",['ngRoute']);

contactmeModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/contact', { templateUrl: 'modules/contactme/contactme.html', controller: 'contactmeCtrl' });
	$routeProvider.when('/contactme', { templateUrl: 'modules/contactme/contactme.html', controller: 'contactmeCtrl' });
}]);

contactmeModule.controller('contactmeCtrl',['$scope',function($scope){

}]);