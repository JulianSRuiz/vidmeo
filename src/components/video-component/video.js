import template from './video.html'

export default {
  bindings:{
    videoList: "<getVideo"
  },
  template,
  controller($state){
    console.log('videoComponentCtrl', this.videoList)
    this.goToVideo = function(videoID) {
      let video = replaceVideoWord(videoID)
        $state.go("player", {id: video})
    }
    function replaceVideoWord(str){
      return str.replace(/\/(.*?)\//g, "")
    }

  }
}
