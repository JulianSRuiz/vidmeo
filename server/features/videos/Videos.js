const mongoose = require("mongoose");

const Video = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  description: {type: String, trim: true},
  embed: {String},
  tags: {String},

})
