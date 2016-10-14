const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth2';
const config = require('./server/config/config.js');
const mongoose = require('mongoose');
const mongoUri = config.mLabUri;
import User from "./server/features/users/User.js"

const app = express();
const port = 4000;
const masterRoutes = require("./server/masterRoutes")
mongoose.connect(mongoUri);
mongoose.connection.once('open', () =>
  console.log(`Connected to MongoDB at ${mongoUri}`));

app.use(passport.initialize());
app.use(passport.session());
app.use( express.static(`${__dirname}/public`) )


//Facebook Authorization......................................

    // passport.use(new FacebookStrategy({
    //   clientID: config.facebook.clientID,
    //   clientSecret: config.facebook.secret,
    //   callbackURL: config.facebook.cbURL
    // }, function(token, refreshToken, profile, done) {
    //   return done(null, profile);
    // }));
    //
    // app.get('/auth/facebook',
    //   passport.authenticate("facebook"));
    //
    // app.get('/auth/facebook/callback',
    //   passport.authenticate("facebook", {
    //     successRedirect: "/#/welcome",
    //     failureRedirect: "/loginerror"
    //   }));

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

    // app.get('/', (req, res) => {
    //   res.send(req.user);
    // });

//Google Authorization........................................

    // passport.use(new GoogleStrategy({
    //     clientID: config.google.clientID,
    //     clientSecret: config.google.secret,
    //     callbackURL: config.google.cbURL
    //   }, function(request, accessToken, refreshToken, profile, done) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //       return done(err, user);
    //     });
    //   }
    // ));
    //
    // app.get('/auth/google', passport.authenticate('google', {
    //   scope: ['profile'] }));
    //
    // app.get('/auth/google/callback',
    //   passport.authenticate('google', {
    //     successRedirect: "http://www.google.com",
    //     failureRedirect: '/loginerror'
    //   }));

    passport.use(new GoogleStrategy({
    clientID: config.google.client_id,
    clientSecret: config.google.client_secret,
    callbackURL: config.google.redirect_uris
    }, function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({
        googleID: profile.id,
        displayName: profile.displayName,
        name: [profile.name]
      }, function (err, user, created) {
      User.findOrCreate({}, function (err, user, created) {
        return cb(err, user);
      })
        });
      }
    ));


    //
    // passport.serializeUser(function(user, done) {
    //   done(null, user);
    // });
    // passport.deserializeUser(function(obj, done) {
    //   done(null, obj);
    // });


//............................................................

masterRoutes(app);

app.listen(port, () => console.log("listening on " + port));
