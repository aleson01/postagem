import express ,{ Request, Response} from "express";
import { FindPostService } from "../../services/postagem/FindPostService";

class FindPostController{
    async handle(req:Request, res:Response){
        const {id} = req.query as {id:string};
        const findPostService = new FindPostService();
        
        const findPost = await findPostService.execute({id});

        return res.json(findPost);
    }
}

export default FindPostController;