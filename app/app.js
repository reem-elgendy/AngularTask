'use strict';

var quizApp = angular.module('quizApp', ['ngRoute'])
    .config(function($routeProvider){
    $routeProvider.when('/quiz',
        {
            templateUrl: 'templates/quiz.html',
            controller: 'QuestionsController'
        });
    $routeProvider.when('/result/:myResult',
        {
            templateUrl: 'templates/result.html',
            controller: 'ResultsController'
        });
});
quizApp.config(function($locationProvider) {

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });
});