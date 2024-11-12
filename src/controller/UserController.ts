

import type { Request, Response } from 'express';
import {prisma} from '../services/DataBase/prisma';

export class UserController {


    //método criar usuário 

    async create(req: Request, res: Response)  : Promise<Response> {
        const { name, email, password } = req.body;

        const user = await prisma.User.create({
            data: {
                name,
                email,
                password
            }
        });

        return res.json({user});
    }

}