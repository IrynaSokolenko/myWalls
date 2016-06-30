angular
    .module('myWallsApp', [
		'ngAnimate',
        'ui.router',
		'ngTouch',
		'ui.grid',
        'ngCookies'
    ])

    .constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://localhost:12017'
	}); 