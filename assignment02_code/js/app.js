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

myApp.controller('mainController', ['$scope', '$location', function($scope, $location){


}]);

myApp.directive('loginForm', function(){

    return {
        restrict: 'AEC',
        templateUrl: 'directives/loginform.html',
        replace: true,
        scope: {

        },
        compile: function(elem, attrs){
            console.log('Compile...');
            console.log(elem);
            console.log(attrs);
        },
        link: function(scope, elements, attrs){
            console.log('Link...');
            console.log(scope);
            console.log(elements);
            console.log(attrs);
        }
    }

});
