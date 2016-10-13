const recentlyWatchedRoutes = require("../src/recentlywatched/recentlyWatchedRoutes");
const favoritesRoutes = require("../src/favorites/favoritesRoutes");

module.exports = app => {
  recentlyWatchedRoutes(app);
  favoritesRoutes(app);
};
