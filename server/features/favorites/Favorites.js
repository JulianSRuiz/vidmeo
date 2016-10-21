const mongoose = require("mongoose");

const Favorites = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String
    },
    embed: {
      type: String
    },
    tags: {
      type: String
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorites"
    }]
});

module.exports = mongoose.model("Favorites", Favorites);
