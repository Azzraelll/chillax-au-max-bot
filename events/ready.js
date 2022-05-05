const config = require('../config.json');

module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        console.log(`Connectés à ${bot.user.username}`);
        console.log(`Le bot est utilisé sur ${bot.guilds.cache.size} serveurs`);
    
        // activité du bot
        bot.user.setPresence({ activities: [{ name: config.Client.activity, type: 'WATCHING'}] });
    }
}