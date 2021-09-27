module.exports = {
    name: 'kick',
    description: 'é o kickas',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('Você foi kickado XD');
        }else {
            message.channel.send('O usuario nao pode ser kickado');
        }
    }
}
