export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {

  vidmeoService.getOnDemandVids()
    .then(function(ondemand) {
      console.log(ondemand);
      $scope.ondemand = ondemand;
    });

  $scope.goToVideo = function(videoID) {
    let video = replaceVideoWord(videoID)
      $state.go("player", {id: video})
  }


  function replaceVideoWord(str){
    return str.replace(/\/(.*?)\//g, "")
  }
}
