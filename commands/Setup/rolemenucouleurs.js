const Discord = require("discord.js");
const rolemenu = require("../../rolemenu.json");
exports.help = {
    name:"rolemenucouleurs"
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


    const embedCouleurs = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.couleurs}`);

    const embedDescriptionCouleurs = new Discord.MessageEmbed()
    .setTitle(`. . . Voici un aperçu de la couleur des rôles . . .`)
    .addFields(
        { name: "\u200B", value: "<@&855384231404371979>\n\n<@&855384383849365524>\n\n<@&855384481161936906>\n\n<@&942536648284078090>\n\n<@&855384709235081258>\n\n<@&875803109610356736>", inline : true},
        { name: "\u200B", value: "<@&855384579825467402>\n\n<@&938084626939932703>\n\n<@&969931685942673488>\n\n<@&855385330998575134>\n\n<@&855385013717172245>", inline : true},
        { name: "\u200B", value: "<@&855385240050597938>\n\n<@&874712309220667493>\n\n<@&875803127629119509>\n\n<@&855384844166758420>\n\n<@&855384917730787328>", inline : true}
    )
    .setTimestamp();

    var rowCouleurs = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuCouleurs")
            .setPlaceholder("Selectionnez une option :")
            .addOptions([
                {
                    label: "🚫 Non Renseignée",
                    value: "nonRenseigne"
                },
                {
                    label: "⚫ Noir",
                    value: "noir"
                },
                {
                    label: "⚪ Blanc",
                    value: "blanc"
                },
                {
                    label: "🔴 Rouge",
                    value: "rouge"
                },
                {
                    label: "💋 Bordeaux",
                    value: "bordeaux"
                },
                {
                    label: "🔵 Bleu",
                    value: "bleu"
                },
                {
                    label: "🔷 Blue Kiss",
                    value: "blueKiss"
                },
                {
                    label: "🥶 Blue Yu",
                    value: "blueYu"
                },
                {
                    label: "🐟 Turquoise",
                    value: "turquoise"
                },
                {
                    label: "🌸 Rose",
                    value: "rose"
                },
                {
                    label: "🌹 Rose Foncé",
                    value: "roseFonce"
                },
                {
                    label: "🟡 Jaune",
                    value: "jaune"
                },
                {
                    label: "🟢 Vert",
                    value: "vert"
                },
                {
                    label: "🟠 Orange",
                    value: "orange"
                },
                {
                    label: "🟣 Violet",
                    value: "violet"
                },
                {
                    label: "🦩 Mauve",
                    value: "mauve"
                },
                {
                    label: "🥟 Beige",
                    value: "beige"
                }
            ])
    );

    message.delete({ timeout: 100});
    message.channel.send({ embeds: [embedCouleurs, embedDescriptionCouleurs], components: [rowCouleurs] });
}