'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl as vm'
  });
}])

.controller('View3Ctrl', ['pessoaService', function(pessoaService) {
    var vm      = this;
    vm.date     = new Date();
    vm.pessoa   = {};

    vm.add = function(pessoa){
        console.log(pessoa);
        pessoaService.add(pessoa);
        vm.pessoa = {};
    };

}]);
