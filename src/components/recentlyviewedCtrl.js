export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {

  vidmeoService.getRecentVideos()
    .then(function(recents) {
      $scope.recents = recents;
    });

  vidmeoService.addVideoToRecents()
    .then(function(recents) {
      $scope.recents = recents;
    });

    $scope.goToVideo = function(videoID) {
      let video = replaceVideoWord(videoID)
        $state.go("player", {id: video})
    }

    function replaceVideoWord(str){
      return str.replace(/\/(.*?)\//g, "")
    }

}
