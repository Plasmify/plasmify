const { getEnvVariables } = require('../../environment/envVariables')
const { Octokit } = require('octokit')

const octokit = new Octokit({
  auth: getEnvVariables().GITHUB_AUTH_TOKEN
})

const getOrgColaborators = async (_org) => {
  const colaborators = await octokit.request(
    'GET /orgs/{org}/outside_collaborators',
    {
      org: _org,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }
  )

  return colaborators.data
}

module.exports = {
  getOrgColaborators
}
