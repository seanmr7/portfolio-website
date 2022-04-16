import { useContext, useState, useEffect } from 'react'
import ProjectContext from '../context/project/ProjectContext'
import ProjectItem from '../components/ProjectItem'

function Projects() {
  const { repos } = useContext(ProjectContext)

  const [reposToDisplay, setReposToDisplay] = useState([])
  const [numberOfReposDisplayed, setnumberOfReposDisplayed] = useState(3)

  useEffect(() => {
    // Reset displayed repos array to an empty array in case of soft reload to prevent duplicate entries
    setReposToDisplay([])

    repos
      .slice(0, 3)
      .forEach((repo) => setReposToDisplay((prevState) => [...prevState, repo]))
  }, [repos])

  const loadMoreRepos = () => {
    if (numberOfReposDisplayed > 40) {
      alert('No more repos to display')
    } else {
      const lastRepo = numberOfReposDisplayed
      const nextRepos = numberOfReposDisplayed + 3
      setnumberOfReposDisplayed((prevState) => prevState + 3)
      console.log(repos.slice(lastRepo, nextRepos))
      repos
        .slice(lastRepo, nextRepos)
        .forEach((repo) => setReposToDisplay((prevState) => [...prevState, repo]))
    }
  }

  return (
    <section id='projects'>
      <main className='mx-auto'>
        <div
          className='container flex flex-col content-center justify-start'
          style={{ minHeight: '45vh' }}>
          <h1 className='text-2xl my-6 mx-auto'>Projects</h1>
          <div className='container mb-8'>
            {reposToDisplay.map((repo) => {
              return <ProjectItem key={repo.id} repo={repo} />
            })}
            <div className='w-full text-center mb-14'>
              <button className='btn btn-primary w-2/3 md:w-1/3' onClick={loadMoreRepos}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Projects
