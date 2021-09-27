module.exports = {
    name: 'ping',
    description: 'Mostra a latencia entre o bot e quem mandou a mensagem',
    execute(message, args){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
}

