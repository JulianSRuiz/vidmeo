// assets
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

//modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

//templates
import homeHTML from "./views/home.html";
import welcomeHTML from "./views/welcome.html";
import favoritesHTML from "./views/favorites.html";
import loginerrorHTML from "./views/loginerror.html";
import recentlyViewedHTML from "./views/recentlyviewed.html";
import playerHTML from "./views/player.html";
import onDemandHTML from "./views/ondemand.html";
import trendingHTML from "./views/trending.html";

import vidmeoCtrl from './components/vidmeoCtrl';
import welcomeCtrl from './components/welcomeCtrl';
import favoritesCtrl from './components/favoritesCtrl';
import recentlyViewedCtrl from './components/recentlyViewedCtrl';
import playerCtrl from './components/playerCtrl';
import ondemandCtrl from './components/ondemandCtrl'
import trendingCtrl from './components/trendingCtrl'
import vidmeoService from './services/vidmeoService.js';
import videoComponent from './components/video-component/video.js'

angular.module("vidmeoApp", [uiRouter, ngSanitize])
    .component('videoComponent', videoComponent)
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
                template: welcomeHTML,
                controller: welcomeCtrl
            })
            .state("favorites", {
                url: "/favorites",
                template: favoritesHTML,
                controller: favoritesCtrl
            })
            .state("loginerror", {
                url: "/loginerror",
                template: loginerrorHTML
            })
            .state("recentlyviewed", {
                url: "/recentlyviewed",
                template: recentlyViewedHTML,
                controller: recentlyViewedCtrl
            })
            .state("player", {
                url: "/player/:id",
                template: playerHTML,
                controllerAs: 'pc',
                controller: playerCtrl
            })
            .state("trending", {
                url: "/trending",
                template: trendingHTML,
                controller: trendingCtrl
            })
            .state("ondemand", {
                url: "/ondemand",
                template: onDemandHTML,
                controller: ondemandCtrl
            });

        $urlRouterProvider.otherwise('/');
    })
