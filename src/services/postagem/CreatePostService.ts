import prismaClient from "../../prisma";

interface CreatePostProps{
    titulo: string;
    conteudo:string;
    userId:string;
}

class CreatePostService{
    async execute({titulo,conteudo,userId}:CreatePostProps){

        const postagem = await prismaClient.postagem.create({
            data:{
                titulo,
                conteudo,
                userId,
            }
        })
        return postagem
    }

    }
export {CreatePostService}