const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"azrael"
}

exports.run = async (bot, message) => {
    const lesGifs = Gif.azrael;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(``)
    .setImage(`${leGif}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}