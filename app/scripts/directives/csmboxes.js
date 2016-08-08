'use strict';

/**
 * @ngdoc directive
 * @name csmappApp.directive:csmInfoBox
 * @description
 * # csmInfoBox
 */ 
angular.module('csm.boxes',[])
.directive('csmInfoBox', [function () {
  return {
    templateUrl: 'views/csminfobox.html',
    restrict: 'A',
    replace: true,
    scope: {
    	boxoptions: '='
    },
    link: function postLink(scope, elem, attrs) {
      console.log(scope, elem, attrs);
    }
  };
}]);