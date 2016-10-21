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
            return $http({
              method: 'PUT',
              url: '/api/videos/favorites'
            })
                .then(function(response) {
                    return response.data.data;
                })
        }

        this.getFavoriteVideos = function(id) {
            return $http({
              method: 'GET',
              url: '/api/videos/favorites'
            })
                .then(function(response) {
                    return response.data.data;
                })
        }

        this.addVideoToRecents = function(id) {
          return $http({
            method: 'PUT',
            url: '/api/videos/recents'
          })
              .then(function(response) {
                  return response.data.data;
              })
      }

      this.getRecentVideos = function(id) {
          return $http({
            method: 'GET',
            url: '/api/videos/recents'
          })
              .then(function(response) {
                  return response.data.data;
              })
      }

        this.postMessage = function(comment) {
          comments.unshift(comment);
        }

    }
