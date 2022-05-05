const Discord = require("discord.js");
const config = require("../../config.json");
module.exports.help = {
    name:"ban"
}

exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTimestamp();

    if (!message.member.permissions.has("BAN_MEMBERS")) {
        embed.setDescription("Tu n'as pas la permission pour ban des membres.");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return;
    };
    if (!args[0]) {
        embed.setDescription("Merci de mentionner la personne à ban");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return;
    };
    if (!args[1]) {
        embed.setDescription("Merci de spécifier la raison du ban");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return;
    };

    const target = message.mentions.members.find(m => m.id);
    const reason = args.slice(1).join(" ");

    if (!target.bannable) {
        embed.setDescription("Tu ne peux pas ban ce membre");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return;
    };

    target.ban({ reason });
    embed.setDescription(`Le membre ${target} a été ban\nMotif : ${reason}`);
    message.delete({ timeout: 100});
    bot.channels.cache.get(config.Client.salonSanction).send({embeds: [embed]});
}
