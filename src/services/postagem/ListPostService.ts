import prismaClient from "../../prisma";

class ListPostService{
    async execute(){
        const postagem = await prismaClient.postagem.findMany()
        return postagem
    }
}

export {ListPostService}