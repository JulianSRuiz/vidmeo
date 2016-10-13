const mongoose = require("mongoose");

const Favorites = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    videolength: {
        type: Number
    },
    description: {
        type: String
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorite"
    }]
});

module.exports = mongoose.model("Favorites", Favorites);
