const { Events } = require('discord.js')

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready as: ${client.user.tag}`)
    client.user.setActivity('with discord.js')
  }
}
