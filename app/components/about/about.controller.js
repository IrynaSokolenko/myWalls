(function () {
    'use strict';

    angular.module('myWallsApp')
        .controller('aboutController', aboutController);

    aboutController.$inject = ["$scope", "$http", "$window", "$q"];

    function aboutController($scope, $http, $window, $q) {
        $scope.heading = "About myWalls";
        $scope.text = "This is a sample about page.";
    }
})();