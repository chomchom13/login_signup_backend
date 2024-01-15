import { userModel } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); // hashSync method waits for the hashedPassword to generate so we don't need to use await here.
  const newUser = new userModel({ name, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Cannot create user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await userModel.findOne({ email: email });
    if (!validUser) return res.status(500).json({ message: "User not found" });
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.json({ message: "Wrong Credentials " });
    const {password: pass, ...rest} = validUser._doc
    res.status(200).json(rest);
  } catch (error) {
    console.error("Cannot login user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { signup, login }; //hi
