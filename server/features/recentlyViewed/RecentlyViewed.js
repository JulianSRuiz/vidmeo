const mongoose = require("mongoose");

const Recents = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    videolength: Number,
    description: String,
    recents: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recents"
    }]
});

module.exports = mongoose.model("Recents", Recents);
