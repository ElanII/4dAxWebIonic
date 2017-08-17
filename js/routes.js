angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('anciens', {
    url: '/page1',
    templateUrl: 'templates/anciens.html',
    controller: 'anciensCtrl'
  })

  .state('ancien', {
    url: '/page2/:id',
    templateUrl: 'templates/ancien.html',
    controller: 'ancienCtrl'
  })
  
  .state('activites', {
    url: '/page3/:id',
    templateUrl: 'templates/activites.html',
    controller: 'activitesCtrl'
  })

  .state('cotisations', {
    url: '/page4/:id',
    templateUrl: 'templates/cotisations.html',
    controller: 'cotisationsCtrl'
  })
  
  .state('adresses', {
    url: '/page5/:id',
    templateUrl: 'templates/adresses.html',
    controller: 'adressesCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});