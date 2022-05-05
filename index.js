const { Client, Intents, Collection, Interaction } = require('discord.js');
const Discord = require("discord.js");
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const config = require('./config.json');
const rolemenu = require('./rolemenu.json');
const fs = require('fs');
bot.commands = new Collection();
const env = require("./.github/workflows/ci.yml");


const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'));
for (const file of commandFiles) {
    const props = require(`./commands/${file}`);
    
    console.log(`La commande ${file} est chargée avec succès`);
    bot.commands.set(props.help.name, props);
}



const commandsSubFolders = fs.readdirSync('./commands/').filter(f => !f.endsWith('.js'));
commandsSubFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}/`).filter(f => f.endsWith('.js'));

    for (const file of commandFiles) {
        const props = require(`./commands/${folder}/${file}`);
        console.log(`La commandes ${file} est chargé avec succès depuis ${folder}`);
        bot.commands.set(props.help.name, props);
    }
})


const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if(event.once) {
        bot.once(event.name, (...args) => event.execute(...args, bot));
    } else {
        bot.on(event.name, (...args) => event.execute(...args, bot));
    }
}

bot.on("interactionCreate", interaction => {
    if (interaction.isSelectMenu()){
        if (interaction.customId === "rolemenuSexe") {

            const member = interaction.member;

            var rolesDelete = [
                "970342998661537882",
                "848167768053907476",
                "848168056428822528",
                "875834164723740712"
            ]
        
        
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values == "homme") {

                member.roles.add(rolemenu.idRoles.sexe.homme);
                embed.addField(`\u200B`, `Vous avez séléctionné : Homme`);

            } else if (interaction.values == "femme") {

                member.roles.add(rolemenu.idRoles.sexe.femme);
                embed.addField(`\u200B`, `Vous avez séléctionné : Femme`);

            } else if (interaction.values == "autre") {

                member.roles.add(rolemenu.idRoles.sexe.autre);
                embed.addField(`\u200B`, `Vous avez séléctionné : Autre`);

            } else if (interaction.values == "nonRenseigne") {

                member.roles.add(rolemenu.idRoles.sexe.nonRenseigne);
                embed.addField(`\u200B`, `Vous avez séléctionné : Non Renseigné`);

            }

            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuOrientation") {

            const member = interaction.member;

            var rolesDelete = [
                "970342988851052574",
                "848170292151844895",
                "848171096599560222",
                "848170884479844352",
                "848170418175082507"
            ]
        
        
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values == "hetero") {

                member.roles.add(rolemenu.idRoles.orientation.heterosexuel);
                embed.addField(`\u200B`, `Vous avez séléctionné : Hétérosexuel`);

            } else if (interaction.values == "bisexuel") {

                member.roles.add(rolemenu.idRoles.orientation.bisexuel);
                embed.addField(`\u200B`, `Vous avez séléctionné : Bisexuel`);

            } else if (interaction.values == "pansexuel") {

                member.roles.add(rolemenu.idRoles.orientation.pansexuel);
                embed.addField(`\u200B`, `Vous avez séléctionné : Pansexuel`);

            } else if (interaction.values == "homo") {

                member.roles.add(rolemenu.idRoles.orientation.homosexuel);
                embed.addField(`\u200B`, `Vous avez séléctionné : Homosexuel / Lesbienne`);
                
            } else if (interaction.values == "nonRenseigne") {

                member.roles.add(rolemenu.idRoles.orientation.nonRenseigne);
                embed.addField(`\u200B`, `Vous avez séléctionné : Non Renseigné`);

            }
            
            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuAge") {

            const member = interaction.member;

            var rolesDelete = [
                "970342641663361074",
                "848168206069530665",
                "848168409425903656",
                "848168522521509888",
                "848168670160617472"
            ]
        
        
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values == "mineur") {

                member.roles.add(rolemenu.idRoles.age.mineur);
                embed.addField(`\u200B`, `Vous avez séléctionné : - 18 ans`);

            } else if (interaction.values == "majeur1") {

                member.roles.add(rolemenu.idRoles.age.majeur1);
                embed.addField(`\u200B`, `Vous avez séléctionné : 18 - 21 ans`);

            } else if (interaction.values == "majeur2") {

                member.roles.add(rolemenu.idRoles.age.majeur2);
                embed.addField(`\u200B`, `Vous avez séléctionné : 22 - 26 ans`);

            } else if (interaction.values == "majeur3") {

                member.roles.add(rolemenu.idRoles.age.majeur3);
                embed.addField(`\u200B`, `Vous avez séléctionné : + 27 ans`);

            } else if (interaction.values == "nonRenseigne") {

                member.roles.add(rolemenu.idRoles.age.nonRenseigne);
                embed.addField(`\u200B`, `Vous avez séléctionné : Non Renseigné`);

            }
            
            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuSituation") {

            const member = interaction.member;

            var rolesDelete = [
                "970342992516890695",
                "848169087880527873",
                "848168934782795796",
                "881160090445570048",
                "891503818532065340"
            ]
        
        
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values == "celibataire") {

                member.roles.add(rolemenu.idRoles.situation.celibataire);
                embed.addField(`\u200B`, `Vous avez séléctionné : Célibataire`);

            } else if (interaction.values == "couple") {

                member.roles.add(rolemenu.idRoles.situation.couple);
                embed.addField(`\u200B`, `Vous avez séléctionné : En Couple`);

            } else if (interaction.values == "complique") {

                member.roles.add(rolemenu.idRoles.situation.complique);
                embed.addField(`\u200B`, `Vous avez séléctionné : Compliqué`);

            } else if (interaction.values == "crush") {

                member.roles.add(rolemenu.idRoles.situation.crush);
                embed.addField(`\u200B`, `Vous avez séléctionné : En Crush`);

            } else if (interaction.values == "nonRenseigne") {

                member.roles.add(rolemenu.idRoles.situation.nonRenseigne);
                embed.addField(`\u200B`, `Vous avez séléctionné : Non Renseigné`);

            }
            
            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuMp") {

            const member = interaction.member;

            var rolesDelete = [
                "970342995662610442",
                "848171776525860875",
                "848171563093065748",
                "848171779796238366"
            ]
        
        
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values == "ouvert") {

                member.roles.add(rolemenu.idRoles.mp.ouvert);
                embed.addField(`\u200B`, `Vous avez séléctionné : MP Ouvert`);

            } else if (interaction.values == "demande") {

                member.roles.add(rolemenu.idRoles.mp.demande);
                embed.addField(`\u200B`, `Vous avez séléctionné : MP sur Demande`);

            } else if (interaction.values == "ferme") {

                member.roles.add(rolemenu.idRoles.mp.ferme);
                embed.addField(`\u200B`, `Vous avez séléctionné : MP Fermé`);

            } else if (interaction.values == "nonRenseigne") {

                member.roles.add(rolemenu.idRoles.mp.nonRenseigne);
                embed.addField(`\u200B`, `Vous avez séléctionné : Non Renseigné`);

            }
            
            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuCouleurs") {

            const member = interaction.member;

            var rolesDelete = [
                    "970615105001783336",
                    "855384231404371979",
                    "855384383849365524",
                    "855384481161936906",
                    "942536648284078090",
                    "855384579825467402",
                    "938084626939932703",
                    "969931685942673488",
                    "855385330998575134",
                    "855384709235081258",
                    "875803109610356736",
                    "855384844166758420",
                    "855384917730787328",
                    "855385013717172245",
                    "855385240050597938",
                    "874712309220667493",
                    "875803127629119509"
                ]
            
            
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );


            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values == "noir") {

                member.roles.add(rolemenu.idRoles.couleurs.noir);
                embed.addField(`\u200B`, `Vous avez séléctionné : Noir`);

            } else if (interaction.values == "blanc") {

                member.roles.add(rolemenu.idRoles.couleurs.blanc);
                embed.addField(`\u200B`, `Vous avez séléctionné : Blanc`);

            } else if (interaction.values == "rouge") {

                member.roles.add(rolemenu.idRoles.couleurs.rouge);
                embed.addField(`\u200B`, `Vous avez séléctionné : Rouge`);

            } else if (interaction.values == "bordeaux") {

                member.roles.add(rolemenu.idRoles.couleurs.bordeaux);
                embed.addField(`\u200B`, `Vous avez séléctionné : Bordeaux`);

            } else if (interaction.values == "bleu") {

                member.roles.add(rolemenu.idRoles.couleurs.bleu);
                embed.addField(`\u200B`, `Vous avez séléctionné : Bleu`);

            } else if (interaction.values == "blueKiss") {

                member.roles.add(rolemenu.idRoles.couleurs.blueKiss);
                embed.addField(`\u200B`, `Vous avez séléctionné : Blue Kiss`);

            } else if (interaction.values == "blueYu") {

                member.roles.add(rolemenu.idRoles.couleurs.blueYu);
                embed.addField(`\u200B`, `Vous avez séléctionné : Blue Yu`);

            } else if (interaction.values == "turquoise") {

                member.roles.add(rolemenu.idRoles.couleurs.turquoise);
                embed.addField(`\u200B`, `Vous avez séléctionné : Turquoise`);

            } else if (interaction.values == "rose") {

                member.roles.add(rolemenu.idRoles.couleurs.rose);
                embed.addField(`\u200B`, `Vous avez séléctionné : Rose`);

            } else if (interaction.values == "roseFonce") {

                member.roles.add(rolemenu.idRoles.couleurs.roseFonce);
                embed.addField(`\u200B`, `Vous avez séléctionné : Rose Foncé`);

            } else if (interaction.values == "jaune") {

                member.roles.add(rolemenu.idRoles.couleurs.jaune);
                embed.addField(`\u200B`, `Vous avez séléctionné : Jaune`);

            } else if (interaction.values == "vert") {

                member.roles.add(rolemenu.idRoles.couleurs.vert);
                embed.addField(`\u200B`, `Vous avez séléctionné : Vert`);

            } else if (interaction.values == "orange") {

                member.roles.add(rolemenu.idRoles.couleurs.orange);
                embed.addField(`\u200B`, `Vous avez séléctionné : Orange`);

            } else if (interaction.values == "violet") {

                member.roles.add(rolemenu.idRoles.couleurs.violet);
                embed.addField(`\u200B`, `Vous avez séléctionné : Violet`);

            } else if (interaction.values == "mauve") {

                member.roles.add(rolemenu.idRoles.couleurs.mauve);
                embed.addField(`\u200B`, `Vous avez séléctionné : Mauve`);

            } else if (interaction.values == "beige") {

                member.roles.add(rolemenu.idRoles.couleurs.beige);
                embed.addField(`\u200B`, `Vous avez séléctionné : Beige`);

            } else if (interaction.values == "nonRenseigne") {

                member.roles.add(rolemenu.idRoles.couleurs.nonRenseigne);
                embed.addField(`\u200B`, `Vous avez séléctionné : Non Renseignée`);

            }

            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuPing") {

            const member = interaction.member;

            var rolesDelete = [
                    "970629550516088912",
                    "848186204734095390",
                    "848184268965937213",
                    "848184974204076102",
                    "856473399735877643",
                    "874760304578400266",
                    "874759674346491925",
                    "874758893081854063",
                    "876210816813256764",
                    "925495811113103431",
                    "903735123235721226"
                ]
            
            
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );


            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values.includes("annonce")) {

                member.roles.add(rolemenu.idRoles.ping.annonce);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Annonce`);

            }
            if (interaction.values.includes("evenement")) {

                member.roles.add(rolemenu.idRoles.ping.evenement);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Evénement`);

            }
            if (interaction.values.includes("vocal")) {

                member.roles.add(rolemenu.idRoles.ping.vocal);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Vocal`);

            }
            if (interaction.values.includes("partenariat")) {

                member.roles.add(rolemenu.idRoles.ping.partenariat);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Partenariat`);

            }
            if (interaction.values.includes("sondage")) {

                member.roles.add(rolemenu.idRoles.ping.sondage);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Sondage`);

            }
            if (interaction.values.includes("likeOrDislike")) {

                member.roles.add(rolemenu.idRoles.ping.likeOrDislike);
                embed.addField(`\u200B`, `Vous avez séléctionné : Like Or Dislike`);

            }
            if (interaction.values.includes("anniv")) {

                member.roles.add(rolemenu.idRoles.ping.anniv);
                embed.addField(`\u200B`, `Vous avez séléctionné : Soutien Anniversaire`);

            }
            if (interaction.values.includes("pipelette")) {

                member.roles.add(rolemenu.idRoles.ping.pipelette);
                embed.addField(`\u200B`, `Vous avez séléctionné : Pipelette Come Back`);

            }
            if (interaction.values.includes("creation")) {

                member.roles.add(rolemenu.idRoles.ping.creation);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Création`);

            }
            if (interaction.values.includes("jeux")) {

                member.roles.add(rolemenu.idRoles.ping.jeux);
                embed.addField(`\u200B`, `Vous avez séléctionné : Ping Jeux`);

            }
            if (interaction.values == "aucun") {

                member.roles.add(rolemenu.idRoles.ping.aucun);
                embed.addField(`\u200B`, `Vous avez séléctionné : Aucun Ping`);

            }
            
            interaction.reply({embeds: [embed], ephemeral: true});
        } else if (interaction.customId === "rolemenuNsfw") {

            const member = interaction.member;

            var rolesDelete = [
                    "848192938155442186",
                    "897833968391553094"
                ]
            
            
            rolesDelete.forEach(
                function(y) { 
                    member.roles.remove(y);
                }
            );


            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp();

            if (interaction.values.includes("nsfw")) {

                member.roles.add(rolemenu.idRoles.nsfw.nsfwAcces);
                embed.addField(`\u200B`, `Vous avez séléctionné : NSFW`);

            }
            if (interaction.values.includes("sondageNsfw")) {

                member.roles.add(rolemenu.idRoles.nsfw.sondageNsfw);
                embed.addField(`\u200B`, `Vous avez séléctionné : Sondage NSFW`);

            }
            if (interaction.values == "nonRenseigne") {

                embed.addField(`\u200B`, `Vous avez séléctionné : Aucun Rôle`);

            }
            
            interaction.reply({embeds: [embed], ephemeral: true});
        }
    } else if (interaction.isButton()) {
        if (interaction.customId === "reglementAccepter") {
            const member = interaction.member;

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .addField(`\u200B`, `Vous avez accepté le règlement, vous pouvez maintenant avoir accès au serveur.`)
            .setTimestamp();

            member.roles.add(rolemenu.idRoles.autres.reglement);

            interaction.reply({embeds: [embed], ephemeral: true});
            
        }else if (interaction.customId === "reglementNsfwAccepter") {
            const member = interaction.member;

            const embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .addField(`\u200B`, `Vous avez accepté le règlement NSFW, vous pouvez maintenant avoir accès à la catégorie NSFW.`)
            .setTimestamp();

            member.roles.add(rolemenu.idRoles.autres.reglementNsfw);

            interaction.reply({embeds: [embed], ephemeral: true});
            
        }
    }
});

bot.on("guildMemberAdd", member => {

    var rolesAuto = [
        "970615105001783336",//couleur
        "848155111897432084",//a propos
        "970342641663361074",//age
        "970342998661537882",//genre
        "970342988851052574",//orientation
        "970342992516890695",//situation
        "970342995662610442",//mp
        "848153315862773760",//rank
        "970629550516088912"//ping
    ]

    rolesAuto.forEach(
        function(y) { 
            member.roles.add(y);
        }
    );

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("OH !!! Mais qui voilà-je ???")
    .setDescription(`🎉🎉 Hey, <@${member.id}> vient d'arriver sur **Chillax Au Max** souhaité lui la bienvenue 🎉🎉 `)
    .setImage(`${config.Client.gifBienvenue}`)
    .setTimestamp();

    bot.channels.cache.get(config.Client.salonBienvenue).send({embeds: [embed]});

});

bot.on("guildMemberRemove", member => {

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Un membre vient de partir")
    .setDescription(`STFUUU, va là-bas <@${member.id}>`)
    .setImage(`${config.Client.gifDepart}`)
    .setTimestamp();

    bot.channels.cache.get(config.Client.salonDepart).send({embeds: [embed]});

});

bot.login(${{secrets.TOKEN}}
);
