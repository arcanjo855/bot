module.exports = {
    name: 'ban',
    description: 'bot do ban',
    execute(message, args){
        const member = message.mentions.users.first();
        if (member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Usuario banido dale XD');

        }else {
            message.channel.send('O usuario nao pode ser banido')
        }

    }
}