angular.module('myWallsApp')
    .directive('navbarDirective', navbarDirective);

navbarDirective.$inject = ['$log'];

function navbarDirective($log) {
    $log.info('navbarDirective injected');

    return {
        templateUrl: 'app/components/navbar/views/navbar.view.html'
    };
};

