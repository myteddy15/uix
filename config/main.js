require.config({
    baseUrl:'',
	urlArgs :null,
	waitSeconds: 60,
    // Alias libraries paths
    paths: {     
        'app': 'config/app',
        'settings': 'config/settings',
        'routes': 'config/routes',
        'angular': 'bower_components/angular/angular.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',
		'angular-route': 'bower_components/angular-route/angular-route.min',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies.min',
		'ui-bootstrap' : 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'ngload': 'bower_components/angularAMD/ngload.min', 
		'root': 'controllers/root_controller',
		'api': 'controllers/api_controller',
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular-route': ['angular'],
		'angular-cookies': ['angular'],         
		'angularAMD': ['angular'],
        'ui-bootstrap': ['angular'],
    },
    // kick start application
    deps: ['app']
});