const Discord = require("discord.js");
exports.help = {
    name:"ken"
}

exports.run = async (bot, message) => {
    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");
    if(message.mentions.users.first()) {
        embed.setDescription(`<@${user.id}>,\n<@${message.author.id}> viens de te la mettre.`);
    } else {
        embed.setDescription(``);
    }
    embed.setImage("https://cdn.discordapp.com/attachments/906604534565048322/969570368274706492/849384673582252092.gif")
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}