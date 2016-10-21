const videosCtrl = require("./videosCtrl");

module.exports = app => {
  app.route("/api/videos")
    .get(videosCtrl.getVideos);

  app.get('/api/videos/fivestaffpicks', videosCtrl.getFiveVideos);
  app.get('/api/videos/fashionvideos', videosCtrl.getTenVideos);
  app.get('/api/videos/ondemand', videosCtrl.getOnDemandVids);
  app.get('/api/videos/trending', videosCtrl.getTrendingVids);
  app.get('/api/videos/welcomevideos', videosCtrl.getWelcomeVideos);

}
