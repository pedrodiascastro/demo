'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vm'
  });
}])

.controller('View2Ctrl', ['pessoaService', function(pessoaService) {
  this.date = new Date();

  this.lPessoas = pessoaService.get();

  this.delete = function (pessoa){
    pessoaService.del(pessoa);
    this.lPessoas = pessoaService.get();
  };

}]);