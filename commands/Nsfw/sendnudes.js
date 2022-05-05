const Discord = require("discord.js");
const Gif = require("../../gif.json");
exports.help = {
    name:"sendnudes"
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

    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const lesGifs = Gif.sendNudes;
    
    const leGif = lesGifs[Math.floor(Math.random()*lesGifs.length)];

    if(message.mentions.users.first()) {
        message.channel.send(`<@${user.id}>,\n<@${message.author.id}> veux te demandé un petit truc 👀🔞`);
    }

    embed.setDescription(``)
    .setImage(`${leGif}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}