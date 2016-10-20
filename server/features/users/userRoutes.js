import passport from "passport";
import userCtrl from "./userCtrl";

export default function(app) {

  app.get('/api/auth', userCtrl.findOneUser, userCtrl.saveUser)




  app.get('/auth/vimeo',
    passport.authenticate('vimeo'));

  app.get('/auth/vimeo/callback',
    passport.authenticate('vimeo', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/#/welcome');
    });

}
