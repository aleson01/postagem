import express ,{ Request, Response} from "express";
import { CreateUserService } from "../../services/usuario/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response){
        const createUserService = new CreateUserService();
        const {name, senha, email} = req.body as {name:string, senha: string, email: string};

        const user = await createUserService.execute({name, senha, email});

        return res.json(user);
    }
}

export default CreateUserController;