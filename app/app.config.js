/**
 * Load modules for application
 */

angular
    
    .module('myWallsApp', [
        'ui.router',
        'myWallsApp.homeServices'
    ])

    .constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://localhost:12017'
	}); 