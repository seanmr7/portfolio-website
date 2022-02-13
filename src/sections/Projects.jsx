import { useContext, useEffect } from 'react'
// import ThemeContext from '../context/theme/ThemeContext'
import ProjectContext from '../context/project/ProjectContext'
import MovieList from '../assets/images/demos/movie-list.png'
import LoanCalc from '../assets/images/demos/Loan-calculator.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import SwiperSlideItem from '../components/SwiperSlideItem'

// Import required swiper css
import 'swiper/css'
import 'swiper/css/navigation'

function Projects() {
  // const { theme } = useContext(ThemeContext)
  const { repos } = useContext(ProjectContext)

  return (
    <section id='projects'>
      <main className='mx-auto'>
        <div className='container flex flex-col content-center justify-start' style={{minHeight: '45vh'}}>
          <h1 className='text-2xl my-6 mx-auto'>Projects</h1>
          <div className='container mb-8'>
            <Swiper 
              modules={[Navigation]}
              centeredSlides
              slidesPerView={1}
              navigation
            >
              {repos.map((repo) => (
                <SwiperSlide key={repo.id}>
                  <SwiperSlideItem key={repo.id} repo={repo} />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>
                <div className={`card-body mx-auto w-3/5 alternate-bg-${theme} rounded-md shadow-xl`}>
                  <img src={MovieList} alt='' />
                  <p className='text-center md:text-xl my-2'>Movie List</p>
                  <p className='md:text-lg text-center'>Short description of the basic functionality of the project</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <a href='https://google.com' target='_blank' rel='noreferrer'>
                <div className={`card-body mx-auto w-3/5 alternate-bg-${theme} rounded-md shadow-xl`}>
                    <img src={LoanCalc} alt='' className='h-2/5' />
                  <p className='text-center text-xl my-2'>Movie List</p>
                  <p className='text-lg text-center'>Short description of the basic functionality of the project</p>
                </div>
              </a>
              </SwiperSlide>
              <SwiperSlide>
              <div className={`card-body mx-auto w-3/5 alternate-bg-${theme} rounded-md shadow-xl`}>
                  <figure>
                    <img src={MovieList} alt='' className='h-2/5' />
                  </figure>
                  <p className='text-center text-xl my-2'>Movie List</p>
                  <p className='text-lg text-center'>Short description of the basic functionality of the project</p>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>

        </div>
      </main>
    </section>
  )
}

export default Projects
