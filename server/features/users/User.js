import mongoose from "mongoose";
import {Schema} from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const User = new Schema({
  googleID: {type: String, required: true, unique: true},
  displayName: {type: String, required: true},
  name: [],
  recents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recents"
    }],
  favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorites"
    }]
});

User.plugin(findOrCreate);

module.exports = mongoose.model("User", User);
