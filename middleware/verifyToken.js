
import jwt from "jsonwebtoken";
import UserModel from "../models/User.model.js";

export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretKey",
      function (err, verifiedToken) {
        if (err) {
          return res.status(403).json({ message: "Invalid JWT Token" });
        }
        console.log(verifiedToken , "verifiedToken");
        
        UserModel.findById(verifiedToken.data._id)
          .then((user) => {
            req.user = user;
            console.log(req, "req.user");
            
            next();
          })
          .catch((err) => res.status(500).json({ message: err.message }));
      }
    );
  } else {
    return res.status(404).json({ message: "Token not found" });
  }
}