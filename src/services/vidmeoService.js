export default function($http, $q) {

        this.getUser = function(){
          return $http.get('/api/auth')
        }

        this.getHomeVideos = function() {
          return $http({
            method: 'GET',
            url: '/api/videos/fivestaffpicks'
          })
            .then(function(response) {
              return response.data.data;
            })
        }

        this.getWelcomeVideos = function() {
          return $http({
            method: 'GET',
            url: '/api/videos/welcomevideos'
          })
          .then(function(response) {
            console.log(response);
            return response.data.data;
          })
        }

        this.getTenVideos = function() {
          return $http({
            method: 'GET',
            url: '/api/videos/fashionvideos'
          })
          .then(function(response) {
            return response.data.data;
          })
        }

        this.getOnDemandVids = function() {
          return $http({
            method: 'GET',
            url: '/api/videos/ondemand'
          })
          .then(function(response) {
            return response.data.data;
          })
        }

        this.getTrendingVids = function() {
          return $http({
            method: 'GET',
            url: '/api/videos/trending'
          })
          .then(function(response) {
            //console.log(response);
            return response.data.data;
          })
        }

        this.addVideoToFavorites = function(id) {
            $http.post("http://localhost:4000/api/favorites" + id)
                .then(function(response) {
                    return response;
                })
        }

        //const recentlyviewedURL = https://api.vimeo.com/me/watched/videos;

        this.addVideoToRecents = function(id) {
            $http.post("http://localhost:4000/api/recentlyviewed" + id)
                .then(function(response) {
                    return response;
                })
        }

        this.postMessage = function(comment) {
          comments.unshift(comment);
        }





    }
