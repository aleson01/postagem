import prismaClient from "../../prisma";

interface DeletePostProps{
    id: string;
    userId: string;
}

class DeletePostService{
    async execute({id, userId}:DeletePostProps){
        if(!id){
            throw new Error("Solicitação Invalida.")
        }

        const find = await prismaClient.postagem.findFirst({
            where:{
                id:id,
            }
        })

        if(!find){
            throw new Error("Postagem não existe.")
        }

        if(find.userId === userId){
            await prismaClient.postagem.delete({
                where:{
                    id:find.id,
                }
            })
            return ("Deletado com Sucesso")
        }
        
    }
}

export {DeletePostService}