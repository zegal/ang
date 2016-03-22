'use strict';

describe('Directive: focusme', function () {

  // load the directive's module
  beforeEach(module('angApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<focusme></focusme>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the focusme directive');
  }));
});
