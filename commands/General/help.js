const Discord = require("discord.js");
const config = require("../../config.json");
exports.help = {
    name:"help"
}

exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Liste des commandes")
    .addField("&help", "Affiche la liste des commandes 💡")
    .addField("&ken", "Exprime tes désirs 😏")
    .addField("&hug", "Exprime ton affection 🥰")
    .addField("&kiss", "Exprime ton affection 😘")
    .addField("&swing", "Menace la personne mentionnée 🗡️")
    .addField("&dahak / &angry", "Exprime ta colère 🤬")
    .addField("&marion", "Si on te mentionne dessus, tu risques d'avoir mal 😬")
    .addField("&spotify", "Pour avoir le lien de la playlist du serveur 🎶")
    .addField("&risitas / &johnny", "Je te laisse découvrir par toi même 😌")
    .addField("&random", "Génère un gif random 🎞️")
    .addField("&twerk", "Montre tes talents en dance 💃🕺")
    .setImage(`${config.Client.ppserv}`)
    .setTimestamp();

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed]});
}