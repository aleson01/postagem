import express ,{ Request, Response} from "express";
import { CreateComentService } from "../../services/comentario/CreateComentController";

class CreateComentController{
    async handle(req:Request, res:Response){
        const createPostService = new CreateComentService();
        const {conteudo,userId,postId} = req.body as {conteudo:string, userId: string, postId: string};
        
        const coment = await createPostService.execute({conteudo,userId,postId});

        return res.json(coment);
    }
}

export default CreateComentController;