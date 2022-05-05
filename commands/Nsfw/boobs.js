const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"boobs"
}

exports.run = async (bot, message) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");
    
    if (!message.channel.nsfw) {
        embed.setDescription(`Ce salon n'est pas un salon NSWF, tu ne peux pas faire cette commande ici`);
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return;
    }

    if (!message.channel.nsfw) {
        embed.setDescription(`Ce salon n'est pas un salon NSWF, tu ne peux pas faire cette commande ici`);
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return;
    }
    
    const lesGifs = Gif.boobs;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];
    
    message.channel.send(`${leGif}`);
    
    message.delete({ timeout: 100});
}