const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
// const cors = require('cors');
const passport = require('passport');
const VimeoStrategy = require('passport-vimeo-oauth2').Strategy;
const config = require('./server/config/config.js');
const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_LABS_URI || config.mLabUri;
// const mongoUri = `mongodb://localhost:27017/vidmeo`;
import User from "./server/features/users/User.js"

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 4000;
const masterRoutes = require("./server/masterRoutes")
mongoose.connect(mongoUri);
mongoose.connection.once('open', () =>
    console.log(`Connected to MongoDB at ${mongoUri}`));

app.use(session({secret: config.mySecrets.secret}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`))


//Vimeo Authorization......................................



passport.use(new VimeoStrategy({
          clientID: config.vidmeoLogin.clientID,
          clientSecret: config.vidmeoLogin.clientSecret,
          callbackURL: "http://localhost:4000/auth/vimeo/callback"
  },
  function(token, tokenSecret, profile, done) {
    // User.findOrCreate({ vimeoId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

//............................................................


masterRoutes(app);

app.listen(port, () => console.log("listening on " + port));
