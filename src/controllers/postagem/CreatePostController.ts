import express ,{ Request, Response} from "express";
import { CreatePostService } from "../../services/postagem/CreatePostService";

class CreatePostController{
    async handle(req:Request, res:Response){
        const createUserService = new CreatePostService();
        const {titulo,conteudo,userId} = req.body as {titulo:string, conteudo: string, userId: string};
        
        const user = await createUserService.execute({titulo,conteudo,userId});

        return res.json(user);
    }
}

export default CreatePostController;