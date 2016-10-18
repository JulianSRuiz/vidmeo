const Recents = require("./RecentlyViewed");
const User = require('../users/User');

module.exports = {
    getRecentVids(req, res) {
      Recents
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
        User.findByIdAndUpdate(req.params.id, {
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
