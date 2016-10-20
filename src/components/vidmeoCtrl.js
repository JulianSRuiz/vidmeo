export default function($scope, $state, vidmeoService) {


      vidmeoService.getHomeVideos()
        .then( function( fiveVideos ) {
          $scope.fiveVideos = fiveVideos;
        } );

      vidmeoService.getWelcomeVideos()
        .then(function(welcomevideos) {
          $scope.welcomevideos = welcomevideos;
        });

      vidmeoService.getTenVideos()
        .then(function(tenVideos) {
          $scope.tenVideos = tenVideos;
        });

      vidmeoService.getOnDemandVids()
        .then(function(ondemand) {
          $scope.ondemand = ondemand;
        })

      vidmeoService.getTrendingVids()
        .then(function(trending) {
          $scope.trending = trending;
        })


      // vidmeoService.addVideoToFavorites(id)
      //           .then(results => {
      //               return results;
      //           });
      //
      //
      // vidmeoService.addVideoToRecents(id)
      //           .then(results => {
      //               return results;
      //           });
      //
      //
      // vidmeoService.getRecentVids(id)
      //         .then(results => {
      //             return results;
      //           })
      //
      //
      //
      // vidmeoService.getFavorites(id)
      //           .then(results => {
      //               return results;
      //           })
      //
      //
      //   $scope.postComment = function(comment) {
      //       vidmeoService.postComment(comment)
      //       };

}
