(function () {
    'use strict';

    angular.module('myWallsApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q"];

    function homeController($scope, $http, $window, $q) {

            var vm = this;

            //services
            // from async service
            // subsections
            vm.col0heading = "Subsections";
            vm.col0text = "I may populate this with a microservice! Or have this be a separate view. This template uses Angular UI which is better than using the Angular router in my opinion.";

            return vm;
       }
})();