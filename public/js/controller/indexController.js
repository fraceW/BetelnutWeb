define([
    'index-module'
], function (app) {
    'use strict';
    app.controller('indexController', function ($scope, $state) {
        $scope.button = function () {
            $state.go('first')
        }
    });
});