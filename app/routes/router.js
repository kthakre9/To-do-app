require('angular-ui-router');
require('jquery');

var mealsApp = angular.module('mealsApp', ['ui.router']);

require('../controllers/mealController');
require('../controllers/mealDetailController');

mealsApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    views: {
      header:{
        templateUrl: '/partials/header.html'
      },
      content: {
        templateUrl: '/partials/overview.html',
        controller: 'mealController'
      }
      // footer: {
      //   templateUrl: '/partials/footer.html'
      // }
    }
  })
  .state('meal', {
    url: '/meal/:id',
    views: {
      header:{
        templateUrl: '/partials/header.html'
      },
      content: {
        templateUrl: '/partials/meal.html',
        controller: 'mealDetailController'
      }
      // footer: {
      //   templateUrl: '/partials/footer.html'
      // }
    }
  });
});

module.exports = mealsApp;
