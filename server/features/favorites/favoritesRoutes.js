const favoritesCtrl = require("./favoritesCtrl");

module.exports = app => {
  app.route("/api/favorites")
    .get(favoritesCtrl.getFavorites)

  app.post("/api/favorites/:id", favoritesCtrl.addVideoToFavorites);
}
