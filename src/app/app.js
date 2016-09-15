(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(appConfig);

        appConfig.$inject = ["$urlRouterProvider", "$stateProvider"];

        function appConfig($urlRouterProvider, $stateProvider) {
        	$urlRouterProvider.otherwise('/feature');

        	$stateProvider
        	.state('feature', {
        		url: '/feature',
        		templateUrl: '/app/feature/feature.html',
        		controller: 'FeatureController as feature'
        	});

        });

})();
