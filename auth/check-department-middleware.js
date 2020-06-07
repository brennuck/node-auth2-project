module.exports = (department) => {
  return function (req, res, next) {
    if (req.decodedJwt.department && req.decodedJwt.department === department) {
      next();
    } else {
      res.status(403).json({ you: "you have no power here!" });
    }
  };
};
