'use strict';

angular.module('materialMedia', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial','com.2fdevs.videogular'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
