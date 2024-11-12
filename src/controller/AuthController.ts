import type { Request, Response } from "express";
import { prisma } from "../services/DataBase/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isValuePassword = await compare(password, user.password);

    if (!isValuePassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = sign({id: user.id}, "secret", {expiresIn: "1d"});
    const { id } = user;
    
    return res.json({ user: {id, email}, token });
  }
}
