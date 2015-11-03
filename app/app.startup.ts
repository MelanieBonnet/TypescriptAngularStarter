/// <reference path="../reference.ts"/>

namespace app {
	'use strict';

	angular.module('starterKit', [
		'ui.router',
		'ui.validate',
		'app_engine'
	]);
	angular.module('starterKit').config(configureStates);
	configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configureStates($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
		var otherwise: string = '/';
		var states: ng.ui.IState[] = getStates();
		states.forEach(function(state: ng.ui.IState): void {
			$stateProvider.state(state);
		});
		$urlRouterProvider.otherwise(otherwise);

		function getStates(): ng.ui.IState[] {
			return [
				{
					name: 'home',
					url: '/',
					templateUrl: 'views/home.html',
					controller: 'HomeController'
				},
				{
					name: 'profile',
					url: '/profile',
					templateUrl: 'views/profile.html',
					controller: 'ProfileController'
				}
			];
		}
	}

}
