// assets
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

//modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';

//templates
import homeHTML from "./views/home.html";
import welcomeHTML from "./views/welcome.html";
import favoritesHTML from "./views/favorites.html";
import loginerrorHTML from "./views/loginerror.html";
import recentlyViewedHTML from "./views/recentlyviewed.html";
import playerHTML from "./views/player.html";

import vidmeoCtrl from './components/vidmeoCtrl';
import vidmeoService from './services/vidmeoService.js';

angular.module("vidmeoApp", [uiRouter])
    .controller('vidmeoCtrl', vidmeoCtrl)
    .service('vidmeoService', vidmeoService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state("home", {
                url: "/",
                template: homeHTML
            })
            .state("welcome", {
                url: '/welcome',
                template: welcomeHTML
            })
            .state("favorites", {
                url: "/favorites",
                template: favoritesHTML
            })
            .state("loginerror", {
                url: "/loginerror",
                template: loginerrorHTML
            })
            .state("recentlyviewed", {
                url: "/recentlyviewed",
                template: recentlyViewedHTML
            })
            .state("player", {
                url: "/player",
                template: playerHTML
            });

        $urlRouterProvider.otherwise('/');
    })
