angular.module('myWallsApp')
    .directive('collections', function ($injector) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/collections/views/collections.view.html',
            controller: collectionsController,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {},
            link: CollectionsLink($injector)
        }
    });

angular.module('myWallsApp')
    .controller('collectionsController', collectionsController);

    collectionsController.$inject = ["$scope", "$log", "$timeout"];

    function collectionsController($scope, $log, $timeout) {
        this.$scope = $scope;

        console.log(this);
        return this;
    }


function CollectionsLink ($injector) {
    var $timeout = $injector.get('$timeout');

    return function ($scope) {
        $scope.grid = {
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            enableFiltering: true,
            rowHeight: 36,
            columnDefs: [
                {field: 'id', displayName: 'ID', width: 50, enableSorting: false},
                {field: 'name', displayName: 'Title', width: 300},
                {field: 'author', displayName: 'Author', width: 200},
                {field: 'price', displayName: 'Price', width: 200},
                {field: 'description', displayName: 'Description', width: 500, enableSorting: false}
            ],
            data: [
                {
                    id: '1',
                    name: 'FirstCollection',
                    author: 'John Doe',
                    price: '39',
                    description: 'The very first collection'
                }, {
                    id: '2',
                    name: 'SecondCollection',
                    author: 'John Doe',
                    price: '34',
                    description: 'The very second collection'
                }, {
                    id: '3',
                    name: 'ThirdCollection',
                    author: 'John Doe',
                    price: '21',
                    description: 'The pre last collection'
                }, {
                    id: '4',
                    name: 'ForthCollection',
                    author: 'John Doe',
                    price: '56',
                    description: 'The very last collection'
                }
            ],
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
                $timeout(function () {
                    $scope.gridApi.core.handleWindowResize();
                });
            }
        };
    }
}

