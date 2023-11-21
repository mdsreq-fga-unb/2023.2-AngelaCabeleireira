const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    const saudacaoRegex = /^(ola|oi|olá|hello|hi|hey)$/i;
    if (saudacaoRegex.test(msg.body)) {
        msg.reply('Olá, obrigada por entrar em contato. Gostaria de agendar algum serviço? \n1 - Sim, quero agendar um serviço! \n2 - Não, entrei em contato por engano.');
    }
    if (msg.body === "1"){
        msg.reply('Perfeitamente😊 \nAcesse nosso site e solicite um agendamento: \nhttps://www.salaoangela.com.br')
    }
    if (msg.body === "2"){
        msg.reply('Tudo bem! Obrigada por avisar😊')
    }    
});

client.initialize();

