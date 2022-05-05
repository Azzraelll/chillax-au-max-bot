const Discord = require("discord.js");
module.exports.help = {
    name:"clear"
}

exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTimestamp();

    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        embed.setDescription("Tu n'as pas la permission pour supprimer les messages.");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return
    }

    const amount = parseInt(args[0], 10);

     if (!amount || isNaN(amount) || amount < 2 || amount > 99) {
        embed.setDescription("Merci de spécifier un nombre entre 2 et 100")
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return
    }

    message.channel.bulkDelete(amount + 1, false);
    embed.setDescription(`${amount} messages ont été supprimés`)
    message.channel.send({embeds: [embed]});
    setTimeout(function(){
        message.channel.bulkDelete(1, false);
    }, 2500);
    
}
