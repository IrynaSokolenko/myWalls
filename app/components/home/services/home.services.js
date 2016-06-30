(function () {
    'use strict';

    angular.module('myWallsApp.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

        function asyncService($http, $q) {
            
            var factory = {
                //properties
                retrievedData: [],
                getHeroText : getHeroText
            };

            function getHeroText() {

                // this is where we'd put some ajax calls

                factory.retrievedData = {
                    HeroHeader: "myWalls",
                    HeroText: "text from service"
                };

            }
            return factory;
        }
})();