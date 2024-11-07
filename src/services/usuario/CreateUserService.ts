import prismaClient from "../../prisma";

interface CreateUserProps{
    name: string;
    email:string;
    senha:string;
}

class CreateUserService{
    async execute({name,email,senha}:CreateUserProps){

        const usuario = await prismaClient.usuario.create({
            data:{
                name,
                senha,
                email
            }
        })
        return usuario
    }
}

export {CreateUserService}