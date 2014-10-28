'use strict';

/**
 * @ngdoc function
 * @name guildManagementApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guildManagementApp
 */
angular.module('guildManagementApp')
    .controller('HomeCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
