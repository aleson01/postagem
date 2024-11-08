import express ,{ Request, Response} from "express";
import { DeletePostService } from "../../services/postagem/DeletePostService";

class DeletePostController{
    async handle(req:Request, res:Response){
        const {id} = req.query as {id:string};
        const userId = req.headers[id];
        const deletePostService = new DeletePostService();
        
        const deletePost = await deletePostService.execute({id, userId});

        return res.json(deletePost);
    }
}

export default DeletePostController;