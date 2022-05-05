exports.help = {
    name:"ping"
}

exports.run = async (bot, message, args) => {
    message.reply("Calcule du ping...").then(resultMessage => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
        const apiping = bot.ws.ping
        message.delete({ timeout: 100 })
        message.channel.send(`- Pong 🏓\n- La latence du bot est de ${ping}ms.\n- La latence de l'API est de ${apiping}ms.`)
    })
}