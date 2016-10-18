const videosCtrl = require("./videosCtrl");

module.exports = app => {
  app.route("/api/videos")
    .get(videosCtrl.getVideos);
    
  app.get('/api/videos/fivestaffpicks', videosCtrl.getFiveVideos);
}
