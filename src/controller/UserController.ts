

import type { Request, Response } from 'express';
import {prisma} from '../services/DataBase/prisma';
import { hash } from 'bcrypt';

export class UserController {



    //método listar usuários
    async index(req: Request, res: Response) : Promise<Response> {
        const users = await prisma.User.findMany();
        return res.json(users);
    }
    //método criar usuário 
    async create(req: Request, res: Response)  : Promise<Response> {
        const { name, email, password } = req.body;



        
    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: "User already Exists" });
    }


        const hashedPassword = await hash(password, 8);

        const user = await prisma.User.create({
            data: {
                name,
                email,
                password : hashedPassword
            }
        });

        return res.json({user});
    }

}