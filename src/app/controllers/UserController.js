import passwordGenerator from 'password-generator';
import MAIL from '../lib/Mail';

export default{
    async store(req, res) {
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await MAIL.sendMail({
            from:'DIO <contato@dio.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá ${name}!`
        })

        return res.json(user);
    }
}