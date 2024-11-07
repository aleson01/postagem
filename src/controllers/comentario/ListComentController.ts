import express ,{ Request, Response} from "express";
import { ListComentService } from "../../services/comentario/ListComentService";

class LisComentController{
    async handle(req:Request, res:Response){
        const {id} = req.query as {id:string};
        const listComentService = new ListComentService();

        const user = await listComentService.execute({id});

        return res.json(user);
    }
}

export default LisComentController;