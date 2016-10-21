export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {

      vidmeoService.getTrendingVids()
        .then(function(trending) {
          $scope.trending = trending;
        });

        $scope.goToVideo = function(videoID) {
          let video = replaceVideoWord(videoID)
            $state.go("player", {id: video})
        }

        function replaceVideoWord(str){
          return str.replace(/\/(.*?)\//g, "")
        }

}
