// (function () {
//     angular.module('myWallsApp')
//         .controller('collectionsController', collectionsController);
//
//     collectionsController.$inject = ["$scope", "$log", "$timeout"];
//
//     function collectionsController($scope, $log, $timeout) {
//         this.$scope = $scope;
//
//         this.$scope.grid = {
//             enableSorting: true,
//             columnDefs: [
//                 { field: 'id', displayName: 'ID', width: 200 },
//                 { field: 'name', displayName: 'Title', width: 200 },
//                 { field: 'description', displayName: 'Description', width: 200, enableSorting: false }
//             ],
//             onRegisterApi: function( gridApi ) {
//                 this.gridApi = gridApi;
//             }
//         };
//
//         this.$scope.grid.data = [
//                 {
//                     id: '1',
//                     name: 'FirstCollection',
//                     description: 'The very first collection'
//                 }, {
//                     id: '2',
//                     name: 'SecondCollection',
//                     description: 'The very second collection'
//                 }, {
//                     id: '3',
//                     name: 'ThirdCollection',
//                     description: 'The pre last collection'
//                 }, {
//                     id: '4',
//                     name: 'ForthCollection',
//                     description: 'The very last collection'
//                 }
//             ]
//         ;
//         console.log(this);
//         return this;
//     }
// })();
