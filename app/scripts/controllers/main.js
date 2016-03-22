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
      {name: 'vincent', id: 1, submitted: true},
      {name: 'harrison', id: 2, submitted: true}
    ];

    $scope.save = function(person, event){
      if(person.id == $scope.persons.length){
        person.submitted = true;
        $scope.persons.push({name: 'new name', id: $scope.persons.length + 1, submitted: false});
        return false;
      }else{
        return true;
      }1
      
    };


  });
