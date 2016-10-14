import mongoose from "mongoose";
import {Schema} from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const User = new Schema({
  googleID: {type: String, required: true, unique: true},
  displayName: {type: String, required: true},
  name: []
});

User.plugin(findOrCreate);

export default mongoose.model("User", User);
