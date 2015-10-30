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

    function configureStates($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        var otherwise = '/';
        var states = getStates();
        states.forEach(function(state) {
            $stateProvider.state(state.state, state.config);
        });
        $urlRouterProvider.otherwise(otherwise);

        function getStates() {
            return [
                {
                    state: 'home',
                    config: {
                        url: '/',
                        templateUrl: 'views/home.html',
                        title: 'home',
                        controller: 'HomeController'
                    }
                },
                {
                    state: 'profile',
                    config: {
                        url: '/profile',
                        templateUrl: 'views/profile.html',
                        title: 'profile',
                        controller: 'ProfileController'
                    }
                }
            ];
        }
    }

}