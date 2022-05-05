const Discord = require("discord.js");
exports.help = {
    name:"marion"
}

exports.run = async (bot, message) => {
    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<@${user.id}>,\nAttention, <@804725776024076328> va te la couper.`)
    .setImage("https://cdn.discordapp.com/attachments/906604534565048322/969575253909045248/924729057814405161.gif")
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}