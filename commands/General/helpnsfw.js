const Discord = require("discord.js");
const config = require("../../config.json");
exports.help = {
    name:"helpnsfw"
}

exports.run = async (bot, message, args) => {
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
    
    embed.setTitle("Liste des commandes NSFW")
    .addField("&ass", "Si tu veux te Lebron James πππ")
    .addField("&boobs", "Si tu veux te Lebron James πππ")
    .addField("&fuck", "Si tu veux te Lebron James ππππ")
    .addField("&lick", "Si tu veux te Lebron James ππΊππ")
    .addField("&suck", "Si tu veux te Lebron James ππππ")
    .addField("&sendnudes", "RΓ©clame ton dΓ» ππ")
    .setImage(`${config.Client.gifnsfw}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}