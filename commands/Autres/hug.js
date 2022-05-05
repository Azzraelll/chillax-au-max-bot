const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"hug"
}

exports.run = async (bot, message) => {
    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const lesGifs = Gif.hug;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");
    if(message.mentions.users.first()) {
        embed.setDescription(`<@${user.id}>,\n<@${message.author.id}> te montre son affection.`);
    } else {
        embed.setDescription(``);
    }
    embed.setImage(`${leGif}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}