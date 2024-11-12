import {Router} from 'express';
import {UserController} from './controller/UserController';
import { AuthController } from './controller/AuthController';


const userController = new UserController();
const authController = new AuthController();

export const router = Router();


router.post("/create", async (req, res) => {
    try {
        await userController.create(req, res);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/users", async (req, res) => {
    try {
        await userController.index(req, res);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/auth", async (req, res) => {
    try{
        await authController.login(req, res);

    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
})

