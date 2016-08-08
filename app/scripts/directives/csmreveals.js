'use strict';

/**
 * @ngdoc directive
 * @name csmappApp.directive:csmReveals
 * @description
 * # csmReveals
 */  
angular.module('csm.reveals', [])
.directive('csmReveals', ['$window', '$timeout', '$document', function($w, $t){
 
  var r = $w.Reveal;
  var rm = $w.RevealMarkdown;

  function inRevealz(el) {
    el.addClass('reveal');
    $t(function() {
      r.initialize({
        controls: true,
        progress: true,
        center: false,
        postMessage: true,
        postMessageEvents: true,
        width: 1000,
        height: 750,
        minScale: 0.5,
        transition: 'cube',
        transitionSpeed: 'slow',
        backgroundTransition: 'zoom',
        parallaxBackgroundImage: 'images/reveal-parallax-1.jpg',
        parallaxBackgroundSize: '2100px 900px',
        parallaxBackgroundVertical: 50,
        parallaxBackgroundHorizontal: 50,
        dependencies: [
          { src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
          { src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true }
        ]
        
      });
    }, 10);
       
  }
  return {
    priority: 1,
    scope: { slides: '=' },
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'views/csmreveal.html',
    transclude: true,
    link: function postLink($s, el) {
      if (document.querySelector('[data-markdown]')) {
        $t(function() {
          var parentClone = el;
          var slidesClone = parentClone.children();
          slidesClone.addClass('slides');
          console.log(el);
          rm.initialize();
          inRevealz(el);
        }, 1);
      }
    }
    
  };
}]);

/*
.directive('csmReveals', ['$timeout', function ($t) {
 
  return ({
    restrict: 'A',
    replace: true,
    transclude: false,
    terminal: true,
    priority: -400,
    controller: 'CsmRevealController',
    controllerAs: 'vm',
    scope: {
      slides: '='
    }, 
    templateUrl: 'views/csmreveal.html',
    compile: function() {
      return {
        post: function postLink(s, e, a) {
          var pa = e.parent();
          var bdy = angular.element('body');
          angular.element('.reveal').addClass('no-transition');
          //pa.css('min-height', bdy.height() - 80);
          e.css('min-height', bdy.height() - 80);
          s.$broadcast('hadrevealed', e);
          s.$watch(a.isactive, function() {
            $t(function(){
              if ((e) && (a.isactive === false)) {
                e.remove();
                e = null;
              }
            }, 1);
          });
        }
      };
    }
  });
}]);

*/