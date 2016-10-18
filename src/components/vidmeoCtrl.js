export default function($scope, $state, vidmeoService) {


      vidmeoService.getHomeVideos()
        .then( function( fiveVideos ) {
          $scope.fiveVideos = fiveVideos;
        } );




        $scope.addVideoToFavorites = function(id) {
            vidmeoService.addVideoToFavorites(id)
                .then(results => {
                    return results;
                })
        };

        $scope.addVideoToRecents = function(id) {
            vidmeoService.addVideoToRecents(id)
                .then(results => {
                    return results;
                })
        };

        $scope.getRecentVids = function(id) {
            vidmeoService.getRecentVids(id)
              .then(results => {
                  return results;
                })
        };

        $scope.getFavorites = function(id) {
            vidmeoService.getFavorites(id)
                .then(results => {
                    return results;
                })
        };


        $scope.postComment = function(comment) {
            doSumService.postComment(comment)
            };

}
