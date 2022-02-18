import AboutImage from '../assets/images/aboutImage.jpeg'
import { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

function About() {
  const { theme } = useContext(ThemeContext)

  return (
    <section id='about' className={`alternate-bg-${theme}`}>
      <main className='mx-auto about-section-div'>
        <div className='container flex flex-col justify-center content-center align-center h-full'>
          <h1 className="flex justify-center text-2xl my-6">About Me</h1>
          <div className='flex flex-col align-center items-center content-center justify-center basis-full md:justify-around md:items-start md:flex-row'>
            <div className='flex about-content min-w-content mb-10 pb-16 max-h-96 max-w-xs shadow-xl rounded-sm md:min-w-[320px] md:self-center lg:w-4/12 md:h-4/12 lg:ml-8'>
                <img src={AboutImage} alt='Sean Riedl' className='px-5 pt-5 rounded-sm card-body' />
            </div>
            <div className='about-content max-w-3xl px-10 py-10 my-10 mx-10 shadow-xl rounded-sm md:my-0 lg:self-center'>
              <p>Hi I'm Sean.</p>
              <br />
              
              <p>I'm a mechanical engineer and a self-taught web developer. 
                Currently I'm working as a plumbing designer, 
                but I am looking to transition to doing web development full-time. 
<<<<<<< HEAD
                Besides programming, I like to rock climb, cook, and watch TV.</p>
=======
                Besides programming, I like to rock climb, cook, and watch TV</p>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
>>>>>>> 76fc2a63dd2e10f920bb34fb446f22ae8fcfc3cf
            </div>
          </div>
        </div>
      </main>

    </section>
  )
}

export default About
