(function () {
    'use strict';
    var serviceId = 'rollsCalculationService';

    angular.module('myWallsApp').service(serviceId, ['$http', '$q', function ($http, $q) {

        var factory = {
            getRollsNumber: getRollsNumber
        };

        function getRollsNumber(width, height) {
            var wallarea = parseInt(width) * parseInt(height);
            var rolearea = 53 * 1005;
            var area = wallarea / rolearea;
            var rollsNumber = Math.ceil(area + (area / 10));

            if (isNaN(rollsNumber)) {
                rollsNumber = 0;
            }

            return rollsNumber;
        }

        return factory;
    }])
})();

