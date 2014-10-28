'use strict';

/**
 * @ngdoc function
 * @name guildManagementApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guildManagementApp
 */
angular.module('guildManagementApp')
    .controller('GuildHeroesCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.title = "Guild heroes";
        $http.get('http://localhost:8080/api/v0/hero/by/guild/A1A58040-5AC6-11E4-8ED6-0800200C9A66')
            .success(function (response) {
                $scope.heroes = response.data;
            });
    }]);
