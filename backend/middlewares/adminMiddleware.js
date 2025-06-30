const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth Failed: Not Admin",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Auth Failed in Admin Middleware",
      error,
    });
  }
};
