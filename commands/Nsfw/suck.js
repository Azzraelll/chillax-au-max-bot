const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"suck"
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
    
    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const lesGifs = Gif.suck;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];

    if(message.mentions.users.first()) {
        message.channel.send(`<@${user.id}>,\n<@${message.author.id}> te la lustre 👅🔞\n${leGif}`);
    } else {
        message.channel.send(`${leGif}`);
    }
    
    message.delete({ timeout: 100});
}