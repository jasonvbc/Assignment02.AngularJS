/**
 * Created by Jason on 4/6/2015.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'views/mainview.html',
            controller: 'mainController'
        })

        .when('/result', {
            templateUrl: 'views/resultview.html',
            controller: 'resultController'
        })
});

myApp.controller('mainController', ['$scope', '$location', function($scope, $location){

    $scope.title = 'AngularJS Custom Directive - Form Submit';

}]);

