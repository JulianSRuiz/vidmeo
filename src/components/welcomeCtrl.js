export default function($scope, $sce, $state, $rootScope, $stateParams, vidmeoService) {
  // $scope.user = {
  //   username:["Sign In"]
  // }

  vidmeoService.getWelcomeVideos()
    .then(function(welcomevideos) {
      $scope.welcomevideos = welcomevideos;
    });
  vidmeoService.getUser().then(results =>  {
      console.log(results.data)
      vidmeoService.user = results.data
      $rootScope.$broadcast('gotUser')
      } )

      $scope.goToVideo = function(videoID) {
        let video = replaceVideoWord(videoID)
          $state.go("player", {id: video})
      }

      function replaceVideoWord(str){
        return str.replace(/\/(.*?)\//g, "")
      }
}
