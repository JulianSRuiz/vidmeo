// assets
import './css/style.css'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//templates
import homeHTML from "./views/home.html"
//modules
import angular from 'angular'
import uiRouter from 'angular-ui-router'


angular.module("vidmeoApp", [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state("home", {
        url:"/",
        template: homeHTML
      })

    $urlRouterProvider.otherwise('/');
  })
