// (function () {
//     'use strict';
//
//     angular.module('myWallsApp', [])
//         .service('CollectionsService', CollectionsService);
//
//     CollectionsService.$inject = ['$http', '$q'];
//
//     function CollectionsService($http, $q) {
//
//         var factory = {
//             //properties
//             retrievedData: [],
//             getCollections: getCollections
//         };
//
//         function getCollections() {
//
//             factory.retrievedData = {
//                 data: [
//                     {
//                         id: '1',
//                         name: 'FirstCollection',
//                         description: 'The very first collection'
//                     }, {
//                         id: '2',
//                         name: 'SecondCollection',
//                         description: 'The very second collection'
//                     }, {
//                         id: '3',
//                         name: 'ThirdCollection',
//                         description: 'The pre last collection'
//                     }, {
//                         id: '4',
//                         name: 'ForthCollection',
//                         description: 'The very last collection'
//                     }
//                 ]
//             };
//         }
//
//         return factory;
//     }
// })();
