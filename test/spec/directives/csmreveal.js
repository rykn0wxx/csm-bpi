'use strict';

describe('Directive: csmReveal', function () {

  // load the directive's module
  beforeEach(module('csmBpiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<csm-reveal></csm-reveal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the csmReveal directive');
  }));
});
