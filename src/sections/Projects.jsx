import { useContext, useState, useEffect, useRef } from 'react'
import ProjectContext from '../context/project/ProjectContext'
import { formatReposNames, sortRepos } from '../context/project/ProjectActions'
import ProjectItem from '../components/ProjectItem'
// Import required swiper css
import 'swiper/css'
import 'swiper/css/navigation'

function Projects() {
  const { getRepos, repos } = useContext(ProjectContext)
  // formatReposNames(repos)
  // sortRepos(repos)
  useEffect(() => {
    getRepos()
  }, [getRepos, repos])
  const initialDisplay = repos.slice(0, 3)
  const [reposToDisplay, setReposToDisplay] = useState(repos.slice(0, 3))

  const loadMore = () => {
    const lastDisplayedIndex = reposToDisplay.length - 1
    console.log(lastDisplayedIndex)
    const nextToDisplay = repos.slice(reposToDisplay.length, 3)
    console.log(nextToDisplay)
  }

  return (
    <section id='projects'>
      <main className='mx-auto'>
        <div
          className='container flex flex-col content-center justify-start'
          style={{ minHeight: '45vh' }}>
          <h1 className='text-2xl my-6 mx-auto'>Projects</h1>
          <div className='container mb-8'>
            {repos.slice(0, 3).map((repo) => (
              <ProjectItem key={repo.id} repo={repo} />
            ))}
            <div className='w-full text-center mb-14'>
              <button
                className='btn btn-primary w-2/3 md:w-1/3'
                onClick={loadMore}>
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
