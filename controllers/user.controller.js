import jwt from "jsonwebtoken";
import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";

export function register(req, res) {
  const { fullName, email, password } = req.body;

  UserModel.findOne({ email }).then((data) => {
    if (data) {
      return res.status(409).json({ message: "User already Exists" });
    } 
    else {
      const newUser = new UserModel({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
      });

      newUser
        .save()
        .then((data) => {
          return res.status(200).json({ message: data });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    }
  });
}

export function login(req, res) {
  const { email, password } = req.body;

  UserModel
    .findOne({ email })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "User is not registered" });
      }

      let validPassword = bcrypt.compareSync(password, data.password);

      if (!validPassword) {
        return res.status(403).json({ message: "Invalid Password" });
      }

      let token = jwt.sign({ id: data._id }, "secretKey", { expiresIn: "60m" });

      res.status(200).send({
        user: {
          email: data.email,
          fullName: data.fullName,
        },
        accessToken: token,
      });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
}