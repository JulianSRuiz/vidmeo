const Recents = require("./RecentlyViewed");

module.exports = {
    postRecentVids(req, res) {
        new Recents(req.body).save((err, recents) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(201).json(recents);
        });
    },
    getRecentVids(req, res) {
      RecentlyViewed
        .find()
        .populate("videos")
        .exec((err, recents) => {
          if (err) {
            return res.status(500).json(err);
          }
          return res.status(200).json(recents);
        });
    },
    addVideoToRecents(req, res) {
        RecentlyViewed.findByIdAndUpdate(req.params.id, {
            $push: {
                recent: req.body.recentId
            }
        }, (err, recents) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(recents);
        });
    }
};
