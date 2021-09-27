const Discord = require('discord.js'); // pegando a livraria do discord
const config = require('./config.json'); // daqui que vai as config do bot
const fs = require('fs'); // pra adicionar pastas pra comandos
const prefix = '$'; // prefixo do bot obvio


const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.login(config.BOT_TOKEN);
client.once(`ready`, () =>{
    console.log("O brabo ta on")
});


client.on('message', (message)=>{

    if (!message.content.startsWith(prefix) || message.author.bot)return;
    
    const args = message.content.slice(prefix.length).split(' '); 
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === 'dale'){
        client.commands.get('dale').execute(message, args);
    }
    else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'ban'){        
        client.commands.get('ban').execute(message, args);
    }
    else if (command === 'play'){        
        client.commands.get('music').execute(message, args);
    }
});