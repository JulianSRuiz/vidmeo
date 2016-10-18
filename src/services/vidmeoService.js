// angular.module("vidmeoApp")
//     .service("vidmeoService", function($http, $q) {
//
//         const baseUrl = "http://vimeo.com/api/v2/";
//         const userURL = "https://api.vimeo.com/users";
//
//         //const getAllVideosURL = https://api.vimeo.com/videos;
//         //by load date: https://api.vimeo.com/videos?per_page=5&filter=upload_date
//
//
//         // const favoritesURL = https://api.vimeo.com/me/likes;
//
//         this.getVideos() {
//           $http.get("http://localhost:4000/api/videos")
//             .then(function(response) {
//               return response;
//             })
//         }
//
//         this.addVideoToFavorites(id) {
//             $http.post("http://localhost:4000/api/favorites" + id)
//                 .then(function(response) {
//                     console.log(response);
//                     return response;
//                 })
//         }
//
//         //const recentlyviewedURL = https://api.vimeo.com/me/watched/videos;
//
//         this.addVideoToRecents(id) {
//             $http.post("http://localhost:4000/api/recentlyviewed" + id)
//                 .then(function(response) {
//                     console.log(response);
//                     return response;
//                 })
//         }
//
//         this.postMessage = function(comment) {
//           comments.unshift(comment);
//         }
//
//
//
//     })
export default function($http, $q) {

        const baseUrl = "http://vimeo.com/api/v2/video/";
        const userURL = "https://api.vimeo.com/users";

        //const getAllVideosURL = https://api.vimeo.com/videos;
        //by load date: https://api.vimeo.com/videos?per_page=5&filter=upload_date


        // const favoritesURL = https://api.vimeo.com/me/likes;


        this.getHomeVideos = function() {
          return $http({
            method: 'GET',
            url: '/api/videos/fivestaffpicks'
          })
            .then(function(response) {
              console.log(response);
              return response.data.data;
            })
        }

        this.addVideoToFavorites = function(id) {
            $http.post("http://localhost:4000/api/favorites" + id)
                .then(function(response) {
                    console.log(response);
                    return response;
                })
        }

        //const recentlyviewedURL = https://api.vimeo.com/me/watched/videos;

        this.addVideoToRecents = function(id) {
            $http.post("http://localhost:4000/api/recentlyviewed" + id)
                .then(function(response) {
                    console.log(response);
                    return response;
                })
        }

        this.postMessage = function(comment) {
          comments.unshift(comment);
        }



    }
