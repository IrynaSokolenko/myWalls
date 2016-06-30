(function () {
    'use strict';

    angular.module('myWallsApp')
        .controller('footerController', footerController);

    footerController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function footerController($scope, $http, $window, $q, asyncService) {

        var vm = this;

        //services
        vm.angularstrapService = asyncService;

        asyncService.getHeroText();

        // from async service
        vm.HeroHeader = asyncService.retrievedData.HeroHeader;
        vm.HeroText = asyncService.retrievedData.HeroText;

        // subsections
        vm.col0heading = "Subsections";
        vm.col0text = "I may populate this with a microservice! Or have this be a separate view. This template uses Angular UI which is better than using the Angular router in my opinion.";

        return vm;
    }
})();
