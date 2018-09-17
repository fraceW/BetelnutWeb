define(function () {
    'use strict';
    var app = angular.module('index-module', ['ui.router']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/index');
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'page/firstPage/index.html',
                controller: 'indexController'
            })
            .state('first', {
                url: '/first',
                templateUrl: 'page/firstPage/first.html',
                controller: ''
            })
            // .when("/index", { controller: 'indexController', templateUrl: 'page/firstPage/index.html' })
            // .when("/first", { controller: 'indexController', templateUrl: 'page/firstPage/first.html' })

    }])
    return app;
});