import mongoose from "mongoose";
import {Schema} from "mongoose";

const User = new Schema({
  vimeoID: {type: String, required: true, unique: true},
  displayName: {type: String, required: true},
  username: [],
  recents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recents"
    }],
  favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorites"
    }]
});

// User.plugin(findOrCreate);

module.exports = mongoose.model("User", User);
