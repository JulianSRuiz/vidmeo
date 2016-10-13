const videosCtrl = require("./videosCtrl");

module.exports = app => {
  app.route("/api/videos")
    .get(videosCtrl.getVideos)
}
