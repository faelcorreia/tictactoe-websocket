'use strict';

angular.module('tictactoe-websocket', [
    'ngResource',
    'ui.router',
    'btford.socket-io'    
])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('app', {
            url: '/app',
            templateUrl: 'views/app.html',
            controller: 'AppCtrl',
            abstract: true
        })

        .state('app.main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            data: {
                title: 'Main'
            }
        })

        $urlRouterProvider.otherwise('/app/main')
    }
])