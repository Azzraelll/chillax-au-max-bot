const Discord = require("discord.js");
exports.help = {
    name:"spotify"
}

exports.run = async (bot, message) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`${message.author.username}, voilà le lien de la playlist du serveur.`)
    .setURL('https://open.spotify.com/playlist/1qvuq1H2bA5c4jUvKA0cD5?si=5bdd6357bc5c40a5')
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}