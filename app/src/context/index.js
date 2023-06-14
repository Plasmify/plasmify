const { Octokit } = require('octokit')
const { getEnvVariables } = require('../environment/envVariables')

const octokit = new Octokit({
  auth: getEnvVariables().GITHUB_AUTH_TOKEN
})

module.exports = {
  octokit
}
