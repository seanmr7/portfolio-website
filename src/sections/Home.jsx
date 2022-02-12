import { useEffect, useState, useContext } from "react";
// import { themeChange } from "theme-change";
import Typewriter from 'typewriter-effect'
import Switch from 'react-switch'
import monitorIcon from '../assets/images/laptopIcon.svg'
import { FaMoon, FaSun } from 'react-icons/fa'
import ThemeContext from '../context/theme/ThemeContext'

function Home() {
  const { theme, changeTheme } = useContext(ThemeContext)
  
  const [checked, setChecked] = useState(false)
  
  // Set themeChange to false, required for react project per documentation


  // Check if use has a theme stored and set toggle switch to correct side.
  useEffect(() => {
    if(theme === 'dark') {
      setChecked(true)
    }
  }, [theme])

  // Slide toggle on click
  const onChange = (nextChecked) => {
    setChecked(nextChecked)
    if(theme === 'cupcake') {
      changeTheme('dark')
    } else {
      changeTheme('cupcake')
    }
  }

  return (
    <section id='home'>
      <main className="container mx-auto">
        <div className='flex flex-col justify-center content-between home-section-div'>
          <div className='container image-container mx-auto flex justify-center my-7'>
            <img src={monitorIcon} alt='Monitor with code on screen' className="home-section-img" />
          </div>
          <h1 className="flex justify-center text-5xl pb-5 Typewriter_wrapper">
            <Typewriter
              onInit={(typerwriter) => {
                typerwriter.typeString('Web Developer')
                  .start()
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString('Engineer')
                  .start()
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString('Sean Riedl')
              }}
            />
          </h1>
          <div className="flex justify-center items-start max-h-min">
              <Switch 
                onChange={onChange}
                data-toggle-theme='dark,cupcake'
                data-act-class='ACTIVECLASS'
                checked={checked}
                handleDiameter={35}
                height={35}
                width={80}
                className='react-switch'
                offColor='#65C3C8'
                onColor='#793EF9'
                uncheckedIcon={
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 20,
                  }}>
                    <FaMoon />
                  </div>
                }
                checkedIcon={
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 20,
                  }}>
                    <FaSun />
                  </div>
                }
              />
          </div>
        </div>
      </main>
    </section>
  )
}

export default Home
