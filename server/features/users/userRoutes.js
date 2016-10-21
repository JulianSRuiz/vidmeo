import passport from "passport";
import userCtrl from "./userCtrl";
import videosCtrl from "../videos/videosCtrl"
import favoritesCtrl from "../favorites/favoritesCtrl";
import recentlyViewedCtrl from "../recentlyViewed/recentlyViewedCtrl";

export default function(app) {

  app.get('/api/auth', userCtrl.findOneUser, userCtrl.saveUser);

  // app.put("/api/videos/favorites", userCtrl.addVideoToFavorites);
  app.get("/api/videos/favorites", videosCtrl.getFavoriteVideos);

  app.get("/api/videos/recents", videosCtrl.getRecentVids);
  app.put("/api/videos/recents", userCtrl.addVideoToRecents)




  app.get('/auth/vimeo',
    passport.authenticate('vimeo'));

  app.get('/auth/vimeo/callback',
    passport.authenticate('vimeo', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/#/welcome');
    });

}
