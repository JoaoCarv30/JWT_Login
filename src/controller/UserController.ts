

import type { Request, Response } from 'express';
import {prisma} from '../services/DataBase/prisma';
import { hash } from 'bcrypt';

export class UserController {


    //método criar usuário 

    async create(req: Request, res: Response)  : Promise<Response> {
        const { name, email, password } = req.body;

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