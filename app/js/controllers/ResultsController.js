'use strict';
quizApp.controller('ResultsController',
    function ResultsController($scope, $routeParams) {
            $scope.result = $routeParams.myResult;
    });