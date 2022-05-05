const Discord = require("discord.js");
const rolemenu = require("../../rolemenu.json");
exports.help = {
    name:"rolemenunsfw"
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


    const embedNsfw = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.roleNsfw}`)
    .setTimestamp();

    var rowNsfw = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuNsfw")
            .setPlaceholder("Selectionnez une option :")
            .setMaxValues(2)
            .addOptions([
                {
                    label: "🚫 Non Renseigné",
                    value: "nonRenseigne"
                },
                {
                    label: "🔞 NSFW",
                    description: "Avoir l'accès aux salons NSFW.",
                    value: "nsfw"
                },
                {
                    label: "🌡️ Sondage NSFW",
                    description: "Être ping pour les sondages NSFW",
                    value: "sondageNsfw"
                }
            ])
    );

    message.delete({ timeout: 100});
    message.channel.send({ embeds: [embedNsfw], components: [rowNsfw] });
}