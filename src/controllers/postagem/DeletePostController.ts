import express ,{ Request, Response} from "express";
import { DeletePostService } from "../../services/postagem/DeletePostService";

class DeletePostController{
    async handle(req:Request, res:Response){
        const {id} = req.query as {id:string};
        const deletePostService = new DeletePostService();
        
        const deletePost = await deletePostService.execute({id});

        return res.json(deletePost);
    }
}

export default DeletePostController;