/**
 * Created by Jason on 4/6/2015.
 */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$location', function($scope, $location){

    $scope.title = 'AngularJS Custom Directive - Form Submit';

}]);