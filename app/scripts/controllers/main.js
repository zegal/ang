'use strict';

/**
 * @ngdoc function
 * @name angApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angApp
 */
angular.module('angApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.persons = [
      {name: 'vincent', id: 1},
      {name: 'harrison', id: 2}
    ];

    $scope.save = function(person, event){
      if(person.id == $scope.persons.length){
        $scope.persons.push({name: 'new name', id: $scope.persons.length + 1});
        return true;
      }else{
        return true;
      }
      
    };


  });
