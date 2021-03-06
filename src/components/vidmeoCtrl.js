export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {
  $scope.user = {
    displayName: "Sign In"
  }
  $scope.$on('gotUser', function(){
    $scope.user = vidmeoService.user;
  })

      vidmeoService.getHomeVideos()
        .then( function( fiveVideos ) {
          $scope.fiveVideos = fiveVideos;
        } );

        $scope.goToVideo = function(videoID) {
          let video = replaceVideoWord(videoID)
            $state.go("player", {id: video})
        }

        function replaceVideoWord(str){
          return str.replace(/\/(.*?)\//g, "")
        }


}
