import express, { Request, Response } from 'express';
import CreateUserController from './controllers/usuario/CreateUserController'
import ListUserController from './controllers/usuario/ListaUserController';

import CreatePostController from './controllers/postagem/CreatePostController'
import ListPostController from './controllers/postagem/ListPostController'
import DeletePostController from './controllers/postagem/DeletePostController';
import EditPostController from './controllers/postagem/EditPostController';
import FindPostController from './controllers/postagem/FindController';
import CreateComentController from './controllers/comentario/CreateComentController';

import LisComentController from './controllers/comentario/ListComentController';

const router = express.Router();

router.get('/teste', async (req: Request, res: Response) => {
    return ({ok:true})
});
//router.post('/users', new CreateUserController().handle)

router.post('/usuario', async(req:Request, res:Response)=>{
    return new CreateUserController(). handle(req, res);
});
router.get('/usuario', async(req:Request, res:Response)=>{
    return new ListUserController(). handle(req, res);
});

// ROTAS POSTAGEM

router.post('/postagem', async(req:Request, res:Response)=>{
    return new CreatePostController(). handle(req, res);
});

router.get('/postagem', async(req:Request, res:Response)=>{
    return new ListPostController(). handle(req, res);
});

router.delete('/postagem', async(req:Request, res:Response)=>{
    return new DeletePostController() .handle(req,res);
});

router.put('/postagem', async(req:Request, res:Response)=>{
    return new EditPostController() .handle(req,res);
});

router.get('/postagem/id', async(req:Request, res:Response)=>{
    return new FindPostController(). handle(req, res);
});

// ROTAS COMENTARIOS

router.post('/comentario', async(req:Request, res:Response)=>{
    return new CreateComentController(). handle(req, res);
});
router.get('/comentario', async(req:Request, res:Response)=>{
    return new LisComentController(). handle(req, res);
});

export default router;