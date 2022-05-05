const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"angry"
}

exports.run = async (bot, message) => {
    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const lesGifs = Gif.angry;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");
    if(message.mentions.users.first()) {
        embed.setDescription(`<@${user.id}>,\n<@${message.author.id}> te montre sa colère.`);
    } else {
        embed.setDescription(``);
    }
    embed.setImage(`${leGif}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}