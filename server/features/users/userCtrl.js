import User from "./User"

export default {
  findOneUser(req, res, next) {
    User.findOne({vimeoID: req.user.id}, (err, user) => {
      if (err) return res.status(500).json(err);
      if (user) return res.status(201).json(user);
      next();
    })
  },
  saveUser(req, res) {
    new User({
      vimeoID: req.user.id,
      displayName: req.user.displayName,
      username: req.user.username
    }).save((err, user) => {
      if (err) return res.status(500).json(err);
      if (user) return res.status(201).json(user);
    })
  }
}
