import express ,{ Request, Response} from "express";
import { CreateUserService } from "../../services/usuario/CreateUserService";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class CreateUserController{
    async handle(req:Request, res:Response){
        const createUserService = new CreateUserService();
        const {name, senha, email} = req.body as {name:string, senha: string, email: string};
        const hashedPassword = await bcrypt.hash(senha, 10);

        const user = await createUserService.execute({name, senha:hashedPassword, email});

        return res.json(user);
    }
}

export default CreateUserController;