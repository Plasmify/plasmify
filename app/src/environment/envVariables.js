require('dotenv').config()

const getEnvVariables = () => {
  return {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID
  }
}

module.exports = {
  getEnvVariables
}
