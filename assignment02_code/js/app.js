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

        .otherwise({
            redirectTo: '/'
        });
});

myApp.service('nameService', function(){

    var self = this;
    this.username = '';

});

myApp.controller('mainController', ['$scope', '$location', 'nameService', function($scope, $location, nameService){

    $scope.username = nameService.username;
    $scope.$watch('username', function(){
        nameService.username = $scope.username;
    })

}]);

myApp.controller('resultController', ['$scope', '$location', 'nameService', function($scope, $location, nameService){

    $scope.username = nameService.username;
    $scope.$watch('username', function(){
        nameService.username = $scope.username;
    })

}]);

myApp.directive('loginForm', function(){

    return {
        restrict: 'AEC',
        templateUrl: 'directives/loginform.html',
        replace: true
    }

});
