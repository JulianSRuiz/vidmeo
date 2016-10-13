const mongoose = require("mongoose");

const Recents = new mongoose.Schema({
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
        ref: "Recents"
    }]
});

module.exports = mongoose.model("Recents", Recents);
