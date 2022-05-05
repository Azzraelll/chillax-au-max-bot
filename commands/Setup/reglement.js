const Discord = require("discord.js");
const config = require("../../config.json");
exports.help = {
    name:"reglement"
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

    
    embed.setTitle("Voici le règlement général :")
    .setDescription(`**1** - Être respectueux envers tous les membres du serveur.\n\n**2** - Il est interdit de divulguer les informations personnelles des membres sans leurs accords.\n\n**3** - Le troll est strictement interdit.\n\n**4** - Pas de spam sur le serveur, si l'envie te prends il y a le salon <#${config.Client.salonSpam}>.\n\n**5** - Pas d'autopromotion sur le serveur (invitations de serveurs, publicités, etc.) y compris via les MPs envoyés aux autres membres sans leurs accords. Si tu veux faire un partenariat ouvre un ticket dans <#${config.Client.salonConditionPartenariat}>.\n\n**6** - Pas de contenu violent, obscène ou NSFW, qu'il s'agisse de texte, d'images ou de liens mettant en scène de la nudité, du sexe, de l'hyperviolence ou un quelconque contenu dérangeant.\n\n**7** - Si tu remarques quelque chose de contraire aux règles ou qui te met dans un sentiment d'insécurité, informe-en les modérateurs. Nous voulons que ce serveur soit accueillant pour tout le monde ! Un système de ticket est mis en place juste ici <#${config.Client.salonSupport}>.\n\n**8** - Il est interdit de MP une personne qui refuse les MP. Il est interdit de faire une demande de MP dans un autre salon que <#${config.Client.salonDemandeMp}>.`)
    .setImage(`${config.Client.gifReglement}`)
    .setTimestamp();

    const rowBoutons = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId("reglementAccepter")
                .setLabel("Accepter")
                .setStyle("SECONDARY"),
        )

    message.delete({ timeout: 100});
    message.channel.send({embeds: [embed], components: [rowBoutons] });
}