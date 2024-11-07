import prismaClient from "../../prisma";

interface ListComentProps{
    id: string;
}
class ListComentService{
    async execute({id}:ListComentProps){
        if(!id){
            throw new Error("Solicitação Invalida.")
        }

        const find = await prismaClient.comentario.findMany({
            where:{
                postId:id,
            }
        })

        if(!find){
            throw new Error("Postagem não existe.")
        }

        return find
    }
}

export {ListComentService}