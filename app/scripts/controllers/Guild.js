'use strict';

/**
 * @ngdoc function
 * @name guildManagementApp.controller:AboutCtrl
 * @description
 * # GuildCtrl
 * Controller of the guildManagementApp
 */
angular.module('guildManagementApp')
    .controller('GuildCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.title = "Guild";
        $http.get('http://localhost:8080/api/v0/guild').success(function (response) {
            $scope.guilds = response.data;
        });
    }]);
