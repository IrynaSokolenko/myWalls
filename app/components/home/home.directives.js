angular.module('myWallsApp')
    .directive('homeDirective', function() {
        return {
            templateUrl: 'app/components/home/views/home.view.html'
        };
    })
    .directive('carouselDirective', function() {
        return {
            templateUrl: 'app/components/home/views/carousel.view.html'
        };
});
