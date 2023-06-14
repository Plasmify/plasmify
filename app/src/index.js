const { Client, Collection, GatewayIntentBits } = require('discord.js')
const { deploySlashCommands } = require('./helpers/deploy-commands')
const { getEnvVariables } = require('./environment/envVariables')
const { deployEvents } = require('./helpers/deploy-events')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
})

client.commands = new Collection()
client.cooldowns = new Collection()

//* SETUP COMMANDS
deploySlashCommands(client)
deployEvents(client)

client.login(getEnvVariables().DISCORD_TOKEN)
