'use strict';

/**
 * @ngdoc function
 * @name csmappApp.controller:CsmCtrl
 * @description
 * # CsmCtrl
 * Controller of the csmappApp
 */
angular.module('csmappApp')
.controller('CsmCtrl', [function () {
	var me = this;
	me.activenav = 'home';
	me.setnav = function(arg) {
		me.activenav = arg;
	};
}]);