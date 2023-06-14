require('dotenv').config()

const getEnvVariables = () => {
  return {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN
  }
}

module.exports = {
  getEnvVariables
}
