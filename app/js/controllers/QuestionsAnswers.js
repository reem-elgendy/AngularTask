'use strict';
quizApp.controller('QuestionsController',
    function QuestionsController($scope) {
        $scope.myResult =0;
        $scope.quiz =
            [
                {
                    question: 'What is the capital of Egypt?',
                    answers: [
                        {
                            answer: 'Moscow',
                            correct:0,
                        },
                        {
                            answer: 'Paris',
                            correct:0,
                        },
                        {
                            answer: 'Cairo',
                            correct:10,
                        },
                        {
                            answer: 'Madrid',
                            correct:0,
                        }
                    ]
                },
                {
                    question: 'What is the capital of Italy',
                    answers: [
                        {
                            answer: 'Rome',
                            correct:10,
                        },
                        {
                            answer: 'Athens',
                            correct:0,
                        },
                        {
                            answer: 'Tokyo',
                            correct:0,
                        },
                        {
                            answer: 'London',
                            correct:0,
                        }
                    ]
                },
                {
                    question: 'Adams, Leverrier, Galle and Lassell are some of the rings of which planet?',
                    answers: [
                        {
                            answer: 'Mars',
                            correct: 0,
                        },
                        {
                            answer: 'Earth',
                            correct:0,
                        },
                        {
                            answer: 'Saturn',
                            correct:0,
                        },
                        {
                            answer: 'Neptune',
                            correct:10,
                        }
                    ]
                },
                {
                    question: 'The capital of which Scandinavian country is located on the islands of Zealand and Amager',
                    answers: [
                        {
                            answer: 'Norway',
                            correct:0,
                        },
                        {
                            answer: 'Sweden',
                            correct:10,
                        },
                        {
                            answer: 'Denmark',
                            correct:0,
                        },
                        {
                            answer: 'Moscow',
                            correct:0,
                        }
                    ]
                }

            ]


        $scope.chooseAnswer = function (answer) {
            $scope.myResult += answer.correct;
        };

    }
);