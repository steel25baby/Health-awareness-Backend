import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
    try {
      const { firstName, lastName, username, email, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);
      console.log("Request body:", req.body);  
  
      const newUser = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          password: hashedPassword,
        },
      });
  
      res.json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);  
      res.status(500).json({ success: false, message: "Couldn't fetch the user" });
    }
  }