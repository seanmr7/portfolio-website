const formatReposNames = (repos) => {
  repos.forEach((repo) => {
    repo.name = repo.name.replace(/-/g, ' ').replace(/_/g, ' ')
    repo.name = repo.name
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')
  })
}

const compare = (repoA, repoB) => {
  let comparison = 0
  if (repoA.stargazers_count > repoB.stargazers_count) {
    comparison = 1
  } else if (repoA.stargazers_count < repoB.stargazers_count) {
    comparison = -1
  }
  return comparison * -1
}

const sortRepos = (repos) => {
  repos.sort(compare)
}

export { formatReposNames, sortRepos }
