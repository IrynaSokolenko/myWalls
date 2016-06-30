(function () {
    'use strict';

    angular.module('myWallsApp')
        .controller('loginController', loginController);

    loginController.$inject = ["$scope", "$http", "$log"];

    function loginController($scope, $http, $window, $q) {

        var vm = this;


        return vm;
    }
})();
