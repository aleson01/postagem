import prismaClient from "../../prisma";

interface EditePostProps{
    id: string;
    titulo:string;
    conteudo: string;
    userId:string;
}
class EditePostService{
    async execute({id, titulo, conteudo,userId}:EditePostProps){
        if(!id){
            throw new Error("Solicitação Invalida.")
        }

        const find = await prismaClient.postagem.findFirst({
            where:{
                id:id,
            }
        });

        const user = await prismaClient.usuario.findFirst({
            where:{
                id:userId,
            }
        });

        if(!find){
            throw new Error("Postagem não existe.")
        }

        if(find.id === user.id){
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
}

export {EditePostService}