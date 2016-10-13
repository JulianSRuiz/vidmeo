const Videos = require("./Videos");

module.exports = {
    getVideos(req, res) {
      Videos
        .find()
        .populate("videos")
        .exec((err, videos) => {
          if (err) {
            return res.status(500).json(err);
          }
          return res.status(200).json(videos);
        });
    }
};
