const mongoose = require("mongoose");

const Recents = mongoose.Schema({
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
    recents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recents"
    }]
});

module.exports = mongoose.model("Recents", Recents);
