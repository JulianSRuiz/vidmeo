export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {
  let pc = this;

  pc.videoID = "https://player.vimeo.com/video/";

  pc.video = $sce.trustAsResourceUrl(pc.videoID+= $stateParams.id)
  
  vidmeoService.getTenVideos()
    .then(function(tenVideos) {
      pc.tenVideos = tenVideos;
      //if you want to access this object in the view => {{pc.tenVideos}}
    });

    $scope.goToVideo = function(videoID) {
      let video = replaceVideoWord(videoID)
        $state.go("player", {id: video})
    }

}
