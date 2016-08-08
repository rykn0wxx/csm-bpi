'use strict';

if (typeof jQuery === undefined) {
  throw new Error('jquery');
}
 
var rykn0wxx = {};

(function($) {
	var r = window.Reveal; 
	var o = rykn0wxx;

	o.appLayout = {
		fix: function () {
			var mhead = $('.main-header').outerHeight();
			var mfoot = $('.main-header').outerHeight() +  $('.main-footer').outerHeight();
			var winHeight = $(window).height();
			if ($('body').hasClass('fixed')) {
				$('#body').css('height', winHeight - mfoot);
				$('#body > div').css('height', winHeight - mfoot);
			} else {
				$('#body').css('height', winHeight - mhead);
				$('#body > div').css('height', winHeight - mhead);
			}
		},
		activate: function () {
			var me = this;
			setTimeout(function() {
				me.fix(); 
				r.configure({width: 1000, height: 750, minScale: 0.4, transition: 'cube', transitionSpeed: 'default'});
			},500);
			$(window, '.wrapper').resize(function(event) {
				console.log(event);
				me.fix();
				r.configure({width: 1000, height: 750, minScale: 0.5});
			});
		}
	};
	
}(window.jQuery));

(function(o) {
	o.appLayout.activate();
}(window.rykn0wxx));