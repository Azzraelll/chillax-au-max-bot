const Discord = require("discord.js");
const rolemenu = require("../../rolemenu.json");
exports.help = {
    name:"rolemenuping"
}

exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Tu n'as pas la permission pour cette commande.");
        message.reply({embeds: [embed]});
        setTimeout(function(){
            message.channel.bulkDelete(2, false);
        }, 2500);
        return
    }


    const embedPing = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.ping}`)
    .setTimestamp();

    var rowPing = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuPing")
            .setPlaceholder("Selectionnez vos options :")
            .setMaxValues(10)
            .addOptions([
                {
                    label: "🚫 Aucun Ping",
                    description: "Supprime tout vos rôles de ping",
                    value: "aucun"
                },
                {
                    label: "📢 Ping Annonce",
                    description: "Être alerté des nouvelles annonces",
                    value: "annonce"
                },
                {
                    label: "🎉 Ping Evénement",
                    description: "Être alerté des nouveaux événements",
                    value: "evenement"
                },
                {
                    label: "🎙️ Ping Vocal",
                    description: "Être ping pour voc",
                    value: "vocal"
                },
                {
                    label: "🤝 Ping Partenariat",
                    description: "Être alerté des nouveaux partenariats",
                    value: "partenariat"
                },
                {
                    label: "🌡️ Ping Sondage",
                    description: "Être ping pour des sondages divers",
                    value: "sondage"
                },
                {
                    label: "👍👎 Like Or Dislike",
                    description: "Être ping pour donner son avis sur diverses choses",
                    value: "likeOrDislike"
                },
                {
                    label: "🧁 Soutien Anniversaire",
                    description: "Être ping lorsqu'un membre fête son anniversaire",
                    value: "anniv"
                },
                {
                    label: "🗣️ Pipelette Come Back",
                    description: "Être ping pour venir discuter",
                    value: "pipelette"
                },
                {
                    label: "🎉 Ping Création",
                    description: "Être alerté des nouvelles créations des membres du serveur",
                    value: "creation"
                },
                {
                    label: "🕹️ Ping Jeux",
                    description: "Être ping pour jouer à divers jeux",
                    value: "jeux"
                }
            ])
    );


    message.delete({ timeout: 100});
    message.channel.send({ embeds: [embedPing], components: [rowPing] });
}