'use strict';

/**
 * @ngdoc overview
 * @name csmappApp
 * @description
 * # csmappApp
 *
 * Main module of the application.
 */
angular
  .module('csmappApp', [
    'ngRoute',
    'csm.boxes',
    'csm.reveals'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/decks', {
        templateUrl: 'views/decks.html',
        controller: 'DecksCtrl',
        controllerAs: 'decks'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
