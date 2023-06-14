const { SlashCommandBuilder } = require('discord.js')
const { getOrgRepos } = require('../../context/github/repos')

module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName('repos')
    .setDescription('Display all Plasmify Organization repositories.'),

  async execute(interaction) {
    const repos = await getOrgRepos('Plasmify')
    const formattedList = repos
      .map((repo) => `- [${repo.name}](${repo.html_url})`)
      .join('\n')

    await interaction.reply({
      content: `## Here are the repositories of the Plasmify organization:\n${formattedList}`
    })
  }
}
