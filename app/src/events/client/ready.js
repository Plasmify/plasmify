module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`Ready as: ${client.user.tag}`)
    client.user.setActivity('with discord.js')
  }
}
