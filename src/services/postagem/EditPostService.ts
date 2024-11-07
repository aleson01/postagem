import prismaClient from "../../prisma";

interface EditePostProps{
    id: string;
    titulo:string;
    conteudo: string;
}
class EditePostService{
    async execute({id, titulo, conteudo}:EditePostProps){
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

        
        await prismaClient.postagem.update({
            where:{
                id:id,
            },
            data:{
                titulo,
                conteudo,
            }
        })
        return ("Editado com Sucesso")
    }
}

export {EditePostService}