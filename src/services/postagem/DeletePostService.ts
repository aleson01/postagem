import prismaClient from "../../prisma";

interface DeletePostProps{
    id: string;
}

class DeletePostService{
    async execute({id}:DeletePostProps){
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
        await prismaClient.postagem.delete({
            where:{
                id:find.id,
            }
        })
        return ("Deletado com Sucesso")
    }
}

export {DeletePostService}