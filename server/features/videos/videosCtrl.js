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

    getWelcomeVideos: function(req, res) {
      axios({
        method: 'GET',
        url: "https://api.vimeo.com/videos?per_page=10&query=4k&sort=likes&direction=desc",
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
      .then(function(videos) {
        return res.status(200).json(videos.data)
      });
    },

    getFiveVideos: function( req, res ) {
      axios({
        method: 'GET',
        url: 'https://api.vimeo.com/categories/documentary/videos?per_page=5',
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
        .then( function( videos ) {

          return res.status( 200 ).json( videos.data )

        } );
    },

    getTenVideos: function(req, res) {
      axios({
        method: 'GET',
        url: "https://api.vimeo.com/videos?per_page=5&query=nick wooster",
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
      .then (function(videos) {
        return res.status(200).json(videos.data)
      })
    },

    getOnDemandVids: function(req, res) {
      axios({
        method: 'GET',
        url: "https://api.vimeo.com/videos?per_page=5&query=various&sort=likes&direction=desc",
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
      .then (function(videos) {
        return res.status(200).json(videos.data)
      })
    },

    getTrendingVids: function(req, res) {
      axios({
        method: 'GET',
        url: "https://api.vimeo.com/videos?per_page=5&filter=trending",
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
      .then (function(videos) {
        return res.status(200).json(videos.data)
      })
    },

    getFavoriteVideos: function(req, res) {
      axios({
        method: 'GET',
        url: "https://api.vimeo.com/me/likes",
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
      .then (function(videos) {
        return res.status(200).json(videos.data);
      })
    },

    getRecentVids: function(req, res) {
      axios({
        method: 'GET',
        url: "https://api.vimeo.com/me/watched/videos",
        headers: {
          'Authorization': 'Bearer ' + config.vimeo.access_token
        }
      })
      .then (function(videos) {
        return res.status(200).json(videos.data);
      })
    }

};
