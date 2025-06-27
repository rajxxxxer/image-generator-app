import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Login again (token missing)" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded?.id) {
      req.body.userId = decoded.id;
      next();
    } else {
      return res.status(401).json({ success: false, message: "Not Authorized. Please login again." });
    }

  } catch (err) {
    return res.status(401).json({ success: false, message: err.message });
  }
};
