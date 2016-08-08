'use strict';

/**
 * @ngdoc function
 * @name csmappApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the csmappApp
 */
angular.module('csmappApp')
.controller('DecksCtrl', ['$scope', function ($s) {
  
  var me = this;
console.log('deskctrl', $s);
  me.slidesource = 'decksource/novelismbr.md';


}]);