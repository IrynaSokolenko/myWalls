/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('myWallsApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/components/home/views/home.view.html',
            controller: "homeController",
            controllerAs: 'ctrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/views/about.view.html',
            controller: 'aboutController',
            controllerAs: 'vm'
        })
        .state('collections', {
            url: '/collections',
            template: '<collections></collections>'
        })
        .state('rollsCalculation', {
            url: '/rollsCalculation',
            templateUrl: 'app/components/modal/views/modal.view.html',
            controller: 'modalController'
        })
        .state('/login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'app/components/login/views/login.view.html',
            controllerAs: 'vm'
        });

        run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
        function run($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in and trying to access a restricted page
                var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
                var loggedIn = $rootScope.globals.currentUser;
                if (restrictedPage && !loggedIn) {
                    $location.path('/login');
                }
            });
        }

}]);