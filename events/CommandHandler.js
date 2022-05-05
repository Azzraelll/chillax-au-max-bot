const config = require('../config.json');

module.exports = {
    name: "messageCreate",
    execute(message, bot) {
        const prefix = config.Client.prefix

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if(!cmd.startsWith(prefix)) return;
        let commandFile = bot.commands.get(cmd.slice(prefix.length));
        if(commandFile) commandFile.run(bot, message, args);
    }
}