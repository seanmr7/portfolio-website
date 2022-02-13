import { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGem, FaBootstrap, FaGitSquare } from 'react-icons/fa'

function Skills() {
  const { theme } = useContext(ThemeContext)
  return (
    <section id='skills' className={`alternate-bg-${theme}`}>
      <main className='mx-auto'>
        <div className='container flex flex-col skills-section-div'>
          <h1 className='text-2xl my-6 mx-auto text-center'>Skills</h1>
          <div className='container flex justify-self-center self-center justify-around flex-wrap mt-10 md:flex-nowrap'>
            <div className='skill-container mx-3'>
              <FaHtml5 className='text-5xl mb-3' />
              <p className='text-md'>HTML</p>
            </div>
            <div className='skill-container mx-3'>
              <FaCss3Alt className='text-5xl mb-3 mx-auto' />
              <p className='text-md text-center'>CSS</p>
            </div>
            <div className='skill-container mx-3'>
              <FaJsSquare className='text-5xl mb-3 mx-auto' />
              <p className='text-md text-center'>JavaScript</p>
            </div>
            <div className='skill-container mx-3'>
              <FaReact className='text-5xl mb-3 mx-auto' />
              <p className='text-md text-center'>React</p>
            </div>
            <div className='skill-container mx-3'>
              <FaGem className='text-5xl mb-3 mx-auto' />
              <p className='text-md text-center'>Ruby</p>
            </div>
            <div className='skill-container mx-3'>
              <FaBootstrap className='text-5xl mb-3 mx-auto' />
              <p className='text-md text-center'>Bootstrap</p>
            </div>
            <div className='skill-container mx-3'>
              <FaGitSquare className='text-5xl mb-3 mx-auto' />
              <p className='text-md text-center'>Git</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Skills
