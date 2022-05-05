const Discord = require("discord.js");
exports.help = {
    name:"swing"
}

exports.run = async (bot, message) => {
    const username = message.mentions.users.first();
    if(username) {
        user = username;

    } else {
        user = message.author;
    }

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000");
    if(message.mentions.users.first()) {
        embed.setDescription(`<@${user.id}>,\n<@${message.author.id}> te menace de faire de la drill.`);
    } else {
        embed.setDescription(`<@${message.author.id}> arrête tes conneries, on fait pas de la drill ici.`);
    }
    embed.setImage("https://cdn.discordapp.com/attachments/906604534565048322/969573960964522115/848136303271084032.png")
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}