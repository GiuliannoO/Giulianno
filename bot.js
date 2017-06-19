// Requires
const Discord = require('discord.js')

// Create an instance of a Discord client
const client = new Discord.Client()

// The bot is ready
client.on('ready', () => {
  console.log('Bot Started')
})

client.login(process.env.BOT_TOKEN)