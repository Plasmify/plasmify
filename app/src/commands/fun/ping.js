const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  name: 'ping',
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction, client) {
    await interaction.reply({
      content: `Your connection between the bot and your client is about ${client.ws.ping} ms`,
      ephemeral: true
    })
  }
}