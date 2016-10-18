const recentlyViewedCtrl = require("./recentlyViewedCtrl");

module.exports = app => {
  app.route("/api/recentlyViewed")
    .get(recentlyViewedCtrl.getRecentVids)

  app.post("/api/videos/:id", recentlyViewedCtrl.addVideoToRecents);
}
