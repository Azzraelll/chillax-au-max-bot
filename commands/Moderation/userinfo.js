const Discord = require("discord.js");
const moment = require('moment');

exports.help = {
    name:"userinfo"
}

exports.run = async (bot, message) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");

    if (!message.member.permissions.has("ADMINISTRATOR")) {
        embed.setDescription("Tu n'as pas la permission pour cette commande.");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return
    }

    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    
    embed.setTitle("userinfo")
    .addField("-ID du membre", `${user.id}`)
    .addField("-Pseudo", `<@${user.id}>, ${user.nickname ? user.nickname : user.username}`)
    .addField("-Date de création du compte :", `${moment.utc(user.createdAt).format("DD/MM/YYYY")}`)
    .addField("-Date d'arrivée sur le serveur :", `${moment.utc(user.joinedAt).format("DD/MM/YYYY")}`)
    .setTimestamp();

    message.delete({ timeout: 100})
    message.channel.send({embeds: [embed]});
}