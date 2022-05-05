const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"dahak"
}

exports.run = async (bot, message) => {
    const lesGifs = Gif.dahak;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");
    if(message.mentions.users.first()) {
        embed.setDescription(`<@${message.mentions.users.first().id}>,\n<@${message.author.id}> veux dahak.`);
    } else {
        embed.setDescription(`<@${message.author.id}> veux dahak.`);
    }
    embed.setImage(`${leGif}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}