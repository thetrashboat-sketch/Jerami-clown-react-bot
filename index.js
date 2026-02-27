const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const ID = '263100863478890496';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return; // ignore other bots

    if (message.author.id === ID){
        //message.reply('Chris did not send this message')
        message.react('🤡');
    }

});

client.login(process.env.DISCORD_TOKEN);