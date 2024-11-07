import express ,{ Request, Response} from "express";
import { ListPostService } from "../../services/postagem/ListPostService";

class ListPostController{
    async handle(req:Request, res:Response){
        const createUserService = new ListPostService();

        const user = await createUserService.execute();

        return res.json(user);
    }
}

export default ListPostController;