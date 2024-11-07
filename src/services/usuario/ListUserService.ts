import prismaClient from "../../prisma";

class ListUserService{
    async execute(){
        const usuario = await prismaClient.usuario.findMany()
        return usuario
    }
}

export {ListUserService}