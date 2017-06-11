var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
      .when('/', {
      templateUrl:'templates/listar.html',
      controller:'BOController'
    })
    .when('/BOs', {
      templateUrl:'templates/listar.html',
      controller:'BOController'
    })
    .when('/BOs/adicionar', {
      templateUrl:'templates/adicionar.html',
      controller:'BOController'
    })
    .when('/BOs/:id/editar', {
      templateUrl:'templates/editar.html',
      controller:'BOController'
    })
    .when('/BOs/:id/mostrar', {
      templateUrl:'templates/mostrar.html',
      controller:'BOController'
  });
});
