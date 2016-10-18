const Favorites = require("./Favorites");
const User = require("../users/User");

module.exports = {
    getFavorites(req, res) {
      Favorites
        .find()
        .populate("videos")
        .exec((err, favorites) => {
          if (err) {
            return res.status(500).json(err);
          }
          return res.status(200).json(favorites);
        });
    },
    addVideoToFavorites(req, res) {
        User.findByIdAndUpdate(req.params.id, {
            $push: {
                favorite: req.body.favoriteId
            }
        }, (err, favorites) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(favorites);
        });
    }
};
