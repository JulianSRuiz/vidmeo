export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {


  vidmeoService.getFavoriteVideos()
    .then(function(favorites) {
      $scope.favorites = favorites;
      console.log($scope.favorites)
    });

    $scope.goToVideo = function(videoID) {
      let video = replaceVideoWord(videoID)
        $state.go("player", {id: video})
    }

    function replaceVideoWord(str){
      return str.replace(/\/(.*?)\//g, "")
    }

}
