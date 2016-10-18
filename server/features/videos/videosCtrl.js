const Videos = require("./Videos");
const config = require( './../../config/config.js' );

import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'ac540bb21165263a96039149d2259489';

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
    },
    getFiveVideos: function( req, res ) {
      axios({
        method: 'GET',
        url: 'https://api.vimeo.com/categories/experimental/videos?per_page=5',
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
        .then( function( videos ) {

          return res.status( 200 ).json( videos.data )

        } );
    }
};
