'use strict';

/**
 * @ngdoc directive
 * @name angApp.directive:notab
 * @description
 * # notab
 */
angular.module('angApp')
  .directive('ngTab', function () {
     return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if(event.which === 9) {
            var focusNext = false;
            scope.$apply(function (){
              focusNext = scope.$eval(attrs.ngTab);
            });

            if(!focusNext){
              event.preventDefault();              
            }
          }
        });
     };
  });
