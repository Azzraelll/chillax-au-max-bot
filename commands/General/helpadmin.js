const Discord = require("discord.js");
const config = require("../../config.json");
exports.help = {
    name:"helpadmin"
}

exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Liste des commandes admin")
    .addField("&help", "Affiche la liste des commandes 💡")
    .addField("&helpadmin", "Affiche la liste des commandes pour la modération💡")
    .addField("&helpnsfw", "Affiche la liste des commandes NSFW 💡")
    .addField("&userinfo", "Donne les informations sur un utilisateur mentionné 🗒️")
    .addField("&clear", "Supprimer des messages 🗑️,\n&clear [nombre entre 2 et 99]")
    .addField("&kick", "Kick un membre du serveur ❌,\n&kick [membre] [raison]")
    .addField("&ban", "Ban un membre du serveur ⛔,\n&ban [membre] [raison]")
    .addField("&reglement", "Setup le règlement 🗒️")
    .addField("&reglementnsfw", "Setup le règlement NSFW 🗒️")
    .addField("&rolemenubase", "Setup les roles menus Genre, Orientation, Age, Situation, MP ⚙️")
    .addField("&rolemenucouleurs", "Setup le role menu des couleurs ⚙️")
    .addField("&rolemenuping", "Setup le role menu des pings ⚙️")
    .addField("&rolemenunsfw", "Setup le role menu NSFW ⚙️")
    .setImage(`${config.Client.ppserv}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}