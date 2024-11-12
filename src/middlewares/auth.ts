import type { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
};

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ error: "Token not provided" });
        return;
    }

    const [, token] = authorization.split(" ");

    try {
        const decoded = verify(token, "secret");
        const { id } = decoded as TokenPayload;

        // Armazena o ID do usuário no objeto `req`
        (req as any).userId = id;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};
