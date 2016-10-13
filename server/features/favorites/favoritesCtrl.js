const Favorites = require("./Favorites");

module.exports = {
    postFavorites(req, res) {
        new Favorites(req.body).save((err, favorites) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(201).json(favorites);
        });
    },
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
        Favorites.findByIdAndUpdate(req.params.id, {
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
