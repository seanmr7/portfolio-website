import { useContext } from 'react'
import ProjectContext from '../context/project/ProjectContext'
import { formatReposNames, sortRepos } from '../context/project/ProjectActions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import SwiperSlideItem from '../components/SwiperSlideItem'

// Import required swiper css
import 'swiper/css'
import 'swiper/css/navigation'

function Projects() {
  const { repos } = useContext(ProjectContext)

  formatReposNames(repos)
  sortRepos(repos)

  return (
    <section id='projects'>
      <main className='mx-auto'>
        <div
          className='container flex flex-col content-center justify-start'
          style={{ minHeight: '45vh' }}>
          <h1 className='text-2xl my-6 mx-auto'>Projects</h1>
          <div className='container mb-8'>
            <Swiper
              modules={[Navigation]}
              centeredSlides
              slidesPerView={1}
              navigation>
              {repos.map((repo) => (
                <SwiperSlide key={repo.id}>
                  <SwiperSlideItem key={repo.id} repo={repo} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Projects
