import express ,{ Request, Response} from "express";
import { LoginUserService } from "../../services/usuario/LoginUserService";

class LoginUserController{
    async handle(req:Request, res:Response){
        const {email, senha} = req.body as {email:string, senha:string};

        const loginUserService = new LoginUserService();

        const user = await loginUserService.execute({email, senha});

        return res.json(user);
    }
}

export default LoginUserController;
