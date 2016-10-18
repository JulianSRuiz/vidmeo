const recentlyViewedRoutes = require("./features/recentlyViewed/recentlyViewedRoutes");
const favoritesRoutes = require("./features/favorites/favoritesRoutes");
const videosRoutes = require("./features/videos/videosRoutes")
import userRoutes from "./features/users/userRoutes";

module.exports = app => {
  recentlyViewedRoutes(app);
  favoritesRoutes(app);
  videosRoutes(app);
  userRoutes(app);
};
