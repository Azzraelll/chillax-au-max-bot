const Discord = require("discord.js");
const rolemenu = require("../../rolemenu.json");
exports.help = {
    name:"rolemenubase"
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


    const embedSexe = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.sexe}`)
    .setTimestamp();

    var rowSexe = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuSexe")
            .setPlaceholder("Selectionnez une option :")
            //.setMaxValues(2)
            //.setMinValues(1)
            .addOptions([
                {
                    label: "🚫 Non Renseigné",
                    value: "nonRenseigne"
                },
                {
                    label: "🚹 Homme",
                    value: "homme"
                },
                {
                    label: "🚺 Femme",
                    value: "femme"
                },
                {
                    label: "🕵️‍♂️ Autre",
                    value: "autre"
                }
            ])
    );

    const embedOrientation = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.orientation}`)
    .setTimestamp();

    var rowOrientation = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuOrientation")
            .setPlaceholder("Selectionnez une option :")
            .addOptions([
                {
                    label: "🚫 Non Renseigné",
                    value: "nonRenseigne"
                },
                {
                    label: "👩‍❤️‍👨 Hétérosexuel",
                    value: "hetero"
                },
                {
                    label: "🌗 Bisexuel",
                    value: "bisexuel"
                },
                {
                    label: "🌌 Pansexuel",
                    value: "pansexuel"
                },
                {
                    label: "👩‍❤️‍👩 Homosexuel / Lesbienne",
                    value: "homo"
                }
            ])
    );

    const embedAge = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.age}`)
    .setTimestamp();

    var rowAge = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuAge")
            .setPlaceholder("Selectionnez une option :")
            .addOptions([
                {
                    label: "🚫 Non Renseigné",
                    value: "nonRenseigne"
                },
                {
                    label: "🔞 - 18 ans",
                    value: "mineur"
                },
                {
                    label: "👨 18 - 21 ans",
                    value: "majeur1"
                },
                {
                    label: "🧔 22 - 26 ans",
                    value: "majeur2"
                },
                {
                    label: "👴 + 27 ans",
                    value: "majeur3"
                }
            ])
    );

    const embedSituation = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.situation}`)
    .setTimestamp();

    var rowSituation = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuSituation")
            .setPlaceholder("Selectionnez une option :")
            .addOptions([
                {
                    label: "🚫 Non Renseigné",
                    value: "nonRenseigne"
                },
                {
                    label: "💔 Célibataire",
                    value: "celibataire"
                },
                {
                    label: "❤️ En Couple",
                    value: "couple"
                },
                {
                    label: "💜 Compliqué",
                    value: "complique"
                },
                {
                    label: "💕 En Crush",
                    value: "crush"
                }
            ])
    );

    const embedMp = new Discord.MessageEmbed()
    .setDescription(``)
    .setImage(`${rolemenu.gif.mp}`)
    .setTimestamp();

    var rowMp = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("rolemenuMp")
            .setPlaceholder("Selectionnez une option :")
            .addOptions([
                {
                    label: "🚫 Non Renseigné",
                    value: "nonRenseigne"
                },
                {
                    label: "📭 MP Ouvert",
                    value: "ouvert"
                },
                {
                    label: "📬 MP sur Demande",
                    value: "demande"
                },
                {
                    label: "📪 MP Fermé",
                    value: "ferme"
                }
            ])
    );

    message.delete({ timeout: 100});
    message.channel.send({ embeds: [embedSexe], components: [rowSexe] });
    message.channel.send({ embeds: [embedOrientation], components: [rowOrientation] });
    message.channel.send({ embeds: [embedAge], components: [rowAge] });
    message.channel.send({ embeds: [embedSituation], components: [rowSituation] });
    message.channel.send({ embeds: [embedMp], components: [rowMp] });
}