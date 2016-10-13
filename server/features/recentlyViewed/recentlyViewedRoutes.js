const recentlyViewedCtrl = require("./recentlyViewedCtrl");

module.exports = app => {
  app.route("/api/recentlyViewed")
    .get(recentlyViewedCtrl.getRecentVids)
    .post(recentlyViewedCtrl.postRecentVids);

  app.put("/api/videos/:id", recentlyViewedCtrl.addVideoToRecents);
}
