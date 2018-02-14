
(function() {
'use strict';

angular
    .module('myApp')
    .factory('pessoaService', pessoaService);

pessoaService.$inject = [];
function pessoaService() {
    var lPessoas = [
        {nome: 'Pedro' , idade: 32},
        {nome: 'João' , idade: 21},
        {nome: 'Manuel' , idade: 54},
        {nome: 'Carlos' , idade: 8},
        {nome: 'Jorge' , idade: 32},
        ];

    var service = {
        get: get,
        add: add,
        del: del
    };
    
    return service;

    ////////////////
    function get() {
        return lPessoas;
    }

    function add(p){
        lPessoas.push(p);
    }

    function del(p){
        lPessoas = lPessoas.filter(function (pessoa) {
            if (pessoa !== p) return pessoa;
        });
    }

}
})();
