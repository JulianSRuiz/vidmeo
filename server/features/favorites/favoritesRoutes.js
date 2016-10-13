const favoritesCtrl = require("./favoritesCtrl");

module.exports = app => {
  app.route("/api/favorites")
    .get(favoritesCtrl.getFavorites)
    .post(favoritesCtrl.postFavorites);

  app.put("/api/favorites/:id", favoritesCtrl.addVideoToFavorites);
}
