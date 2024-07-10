import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      },
    });
    const token = jwt.sign(newUser, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.json({ success: true, message: "You have sign in successful" });
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Couldn't create the user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ success: false, message: "Couldn't log in" });
  }
};
