const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    // 🛠 FIXED: fetch full user and attach
    const user = await userModel.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = user; // ✅ full user object with _id
    next();
  } catch (error) {
    console.error("❌ Auth Middleware Error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
