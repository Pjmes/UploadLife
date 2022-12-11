import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

//const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res
        .status(404)
        .json({ message: "No existing user by entered credentials." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      oldUser.passwordHash
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something is wrong on the server side sign in." });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const isDataValid = email && password && firstName && lastName;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!isDataValid) {
      return res.status(400).json({
        message: "Pls all fields are required",
      });
    }

    if (oldUser) {
      return res
        .status(400)
        .json({ message: "A user already exists by those credentials." });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      passwordHash,
      name: `${firstName} ${lastName}`,
    });
    
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something is wrong on the server side signing up." });

    console.log(error);
  }
};
