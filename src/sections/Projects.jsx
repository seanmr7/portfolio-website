import { useContext } from 'react'
import ProjectContext from '../context/project/ProjectContext'
import { formatReposNames, sortRepos } from '../context/project/ProjectActions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import SwiperSlideItem from '../components/SwiperSlideItem'

// Import required swiper css
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectItem from '../components/ProjectItem'

function Projects() {
  const { repos } = useContext(ProjectContext)

  formatReposNames(repos)
  sortRepos(repos)

  const testLayout = repos.slice(0, 3)

  return (
    <section id='projects'>
      <main className='mx-auto'>
        <div
          className='container flex flex-col content-center justify-start'
          style={{ minHeight: '45vh' }}>
          <h1 className='text-2xl my-6 mx-auto'>Projects</h1>
          <div className='container mb-8'>
            {testLayout.map((repo) => (
              <ProjectItem key={repo.id} repo={repo} />
            ))}
            <div className='w-full text-center mb-14'>
              <button className='btn btn-primary w-2/3 md:w-1/3'>
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
