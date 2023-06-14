const { octokit } = require('../index')

const getOrgRepos = async (_org) => {
  const repos = await octokit.request('GET /orgs/{org}/repos', {
    org: _org,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return repos
}

module.exports = {
  getOrgRepos
}
