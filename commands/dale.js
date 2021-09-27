const { execute } = require("./kick");

module.exports = {
    name: 'dale',
    description: 'é o dale do dele',
    execute(message, args){
        message.channel.send('Do dele');
    }
}