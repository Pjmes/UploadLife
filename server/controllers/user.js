import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

//const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //check if there is an existing user email
    const existingUser = await UserModal.findOne({ email });

    if (!existingUser) return res.status(404).json({ message: "The user doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Credentials are invalid" });

    const token = jwt.sign({ id: result._id }, 'test');

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong on the server side during signIn." });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });
    
    if (existingUser) return res.status(400).json({ message: "This user already exists." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { id: result._id }, 'test');

    res.status(201).json({ result, token });

  } catch (error) {

    res.status(500).json({ message: "Something went wrong on the server side during signup." });
    
    console.log(error);
  }
};