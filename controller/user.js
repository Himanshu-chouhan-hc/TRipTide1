const User = require('../module/user');

module.exports.renderSignupForm = (req, res) => {
  res.render('user/signup');
};

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Welcome to Wanderlust!');
      return res.redirect('/listings');
    });
  } catch (e) {
    req.flash('error', e.message);
    return res.redirect('/user/signup');
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render('user/login');
};

module.exports.login = (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = res.locals.redirectUrl || '/listings';
  delete req.session.redirectUrl;
  return res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy((destroyErr) => {
      if (destroyErr) {
        console.error('Error destroying session during logout:', destroyErr);
      }
      res.clearCookie('connect.sid');
      req.flash('success', 'Logged out successfully!');
      return res.redirect('/listings');
    });
  });
};
