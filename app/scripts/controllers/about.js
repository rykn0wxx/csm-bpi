'use strict';

/**
 * @ngdoc function
 * @name csmappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csmappApp
 */
angular.module('csmappApp')
.controller('AboutCtrl', function () {
	var me = this;
	var Reveal = window.Reveal;
	me.startR = function() {
		Reveal.initialize({
			controls: true,
			transition: 'slide'
		});
	};
});
