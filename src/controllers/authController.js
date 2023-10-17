const User = require('../models/userModel');
const asyncAwaitCatch = require('../utils/asyncAwaitCatch');
const createAndSendToken = require('../utils/createAndSendToken');

exports.sign_up = asyncAwaitCatch(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const url = `${req.protocol}://${req.get('host')}/my-profile`;
  console.log('url', url);
  //   await new Email(newUser, url).sendWelcome();
  createAndSendToken(user, 201, req, res);
});
