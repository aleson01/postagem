import prismaClient from "../../prisma";

interface FindPostProps{
    id: string;
}
class FindPostService{
    async execute({id}:FindPostProps){
        if(!id){
            throw new Error("Solicitação Invalida.")
        }

        const finde = await prismaClient.postagem.findFirst({
            where:{
                id:id,
            }
        })

        if(!finde){
            throw new Error("Postagem não existe.")
        }
        
        return finde;
    }
}

export {FindPostService}