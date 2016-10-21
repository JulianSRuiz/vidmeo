import User from "./User";
import Videos from "../videos/Videos";
import Favorites from "../favorites/Favorites";
import Recents from "../recentlyViewed/RecentlyViewed"

export default {
  findOneUser(req, res, next) {
    User.findOne({vimeoID: req.user.id}, (err, user) => {
      if (err) return res.status(500).json(err);
      if (user) return res.status(201).json(user);
      next();
    })
  },
  saveUser(req, res) {
    new User({
      vimeoID: req.user.id,
      displayName: req.user.displayName,
      username: req.user.username
    }).save((err, user) => {
      if (err) return res.status(500).json(err);
      if (user) return res.status(201).json(user);
    })
  },
  addVideoToFavorites(req, res) {
    Favorites.findByIdAndUpdate(req.params.id,
      {$push: {favorites: req.body}}, (err, video) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(video);
    });
  },
  getFavoriteVideos(req, res) {
      Favorites.findAll({videoID}), (err, videos) => {
        if (err) return res.status(500).json(err);
        if (videos) return res.status(200).json(videos);
      }
  },
  addVideoToRecents(req, res) {
    Recents.findByIdAndUpdate(req.params.id,
      {$push: {recents: req.body}}, (err, video) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(video);
    });
  },
  getRecentVideos(req, res) {
      Recents.findAll({videoID}), (err, videos) => {
        if (err) return res.status(500).json(err);
        if (videos) return res.status(200).json(videos);
      }
  }
}
