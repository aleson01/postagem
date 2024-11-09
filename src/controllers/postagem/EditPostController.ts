import express ,{ Request, Response} from "express";
import {EditePostService} from "../../services/postagem/EditPostService";

class EditPostController{
    async handle(req:Request, res:Response){
        const {id} = req.query as {id:string};
        const {titulo,conteudo,userId} = req.body as {titulo:string, conteudo:string, userId:string}
        const editPostController = new EditePostService();
        
        const editPost = await editPostController.execute({id,titulo,conteudo,userId});

        return res.json(editPost);
    }
}

export default EditPostController;