import MAIL from '../lib/Mail';

export default{
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({data}) {
        const {user} = data;

        await MAIL.sendMail({
            from:'DIO <contato@dio.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá ${user.name}!`
        })
    }
}

