import prismaClient from "../../prisma";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

interface ListComentProps{
    email: string;
    senha: string;
}
class LoginUserService{
    SECRET_KEY="minha_chave_secreta";
    async execute({email, senha}:ListComentProps){
        const hashedPassword = await bcrypt.hash(senha, 10);

        const user = await prismaClient.usuario.findFirst({
            where:{
                email:email,
            }
        })
        if (user && (await bcrypt.compare(senha, user.senha))) {
            const token = jwt.sign({ id: user.id, email: user.email },
                this.SECRET_KEY, {
                    expiresIn: '15m',
                });
                return({ token });
        }
    }
}
export {LoginUserService}