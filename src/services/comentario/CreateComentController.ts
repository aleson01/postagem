import prismaClient from "../../prisma";

interface CreateComentProps{
    conteudo:string;
    userId:string;
    postId:string;
}

class CreateComentService{
    async execute({conteudo,userId,postId}:CreateComentProps){

        const coment = await prismaClient.comentario.create({
            data:{
                conteudo,
                userId,
                postId,
            }
        })
        return coment
    }

    }
export {CreateComentService}