angular.module("vimeoApp")
  .service("vimeoService", function($http, $q) {

    const baseUrl = "https://www.googleapis.com/youtube/";
    const apikey = "AIzaSyAZT7l7jUtemn577dAZWhNAf-SD499klFY";

     this.getVideos = function(videos) {
       return videos;
      //  let deferred = $q.defer();
      //  $http.get(baseUrl + "v3/videos?part=snippet&chart=mostPopular&key=" + apikey)
      //   .then(function(results) {
      //     if (filterQuery.)
      //   })
      }

      function datamapper(x) {
        return x.map(function(ele) {
          return {
            //video specs (i.e. title = ele.title)
          }
        })

        this.postRecentVids = function(post) {
          recentlyViewed.unshift(post);
        }

        // this.getRecentVids = function() {
        //   return videos;
        // }
      }




  })
