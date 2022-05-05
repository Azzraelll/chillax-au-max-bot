const Discord = require("discord.js");
const config = require("../../config.json");
exports.help = {
    name:"reglementnsfw"
 }

exports.run = async (bot, message, args) => {
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

    
    embed.setTitle("Voici le règlement NSFW :")
    .setDescription(`**1** - N'oubliez pas ce qu'est le respect, si vous êtes ici c'est avant tout pour partager/discuter ou encore délirer. En aucun cas se prendre la tête !\n\n**2** - Les propos ou débats racistes/homophobes/sexistes ne seront pas tolérés.\n\n**3** - Les vidéos/photos contenants de la violence/discrimination/harcèlement sont INTERDITES ⛔\n\n**4** - Les videos de type/sextape/sexcam/viol/voyeurisme sont formellement interdites !\n\n**5** - Le revenge porn sera directement sanctionné d'un bannissement.\n\n❗ Chaque infraction au règlement sera sanctionné d'un avertissement. ❗\n\n2 avertissements = mute 24h\n3 avertissements = ban.\n\nAprès avoir accepté le règlement NSFW, tu auras accès au salon <#${config.Client.salonRolesNsfw}> où tu pourras ensuite prendre l'accès aux salons NSFW.`)
    .setImage(`${config.Client.gifReglement}`)
    .setTimestamp();

    const rowBoutons = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId("reglementNsfwAccepter")
                .setLabel("Accepter")
                .setStyle("SECONDARY"),
        )

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed], components: [rowBoutons] });
}