'use strict';

/**
 * @ngdoc overview
 * @name guildManagementApp
 * @description
 * # guildManagementApp
 *
 * Main module of the application.
 */
angular
    .module('guildManagementApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/guild', {
                templateUrl: 'views/guild.html',
                controller: 'GuildCtrl'
            })
            .when('/guild/contracts', {
                templateUrl: 'views/guild-contracts.html',
                controller: 'GuildContractsCtrl'
            })
            .when('/guild/heroes', {
                templateUrl: 'views/guild-heroes.html',
                controller: 'GuildHeroesCtrl'
            })
            .when('/guild/equipment', {
                templateUrl: 'views/guild-equipment.html',
                controller: 'GuildEquipmentCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
