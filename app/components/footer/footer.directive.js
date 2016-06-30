angular.module('myWallsApp')
    .directive('footerDirective', footerDirective);

    footerDirective.$inject = ['$log'];

    function footerDirective($log) {
        $log.info('footerDirective injected');

        return {
            templateUrl: 'app/components/footer/views/footer.view.html'
        };
    };

