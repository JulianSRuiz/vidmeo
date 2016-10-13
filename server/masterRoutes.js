const recentlyViewedRoutes = require("./features/recentlyViewed/recentlyViewedRoutes");
const favoritesRoutes = require("./features/favorites/favoritesRoutes");
const videosRoutes = require("./features/videos/videosRoutes")

module.exports = app => {
  recentlyViewedRoutes(app);
  favoritesRoutes(app);
  videosRoutes(app);
};
