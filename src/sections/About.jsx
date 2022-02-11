import AboutImage from '../assets/images/aboutImage.jpeg'

function About() {
  

  return (
    <section id='about' style={{backgroundColor: 'white'}}>
      <main className='mx-auto'>
        <div className='flex flex-col justify-start content-center h-2/4'>
          <h1 className="flex justify-center text-primary text-2xl my-6">About Me</h1>
          <div className='flex flex-col align-center items-center content-center justify-center basis-full lg:justify-around lg:items-start lg:flex-row'>
            <div className='flex bg-zinc-200 min-w-content mb-16 pb-16 max-h-96 max-w-xs lg:w-4/12 lg:h-4/12 lg:ml-8'>
                <img src={AboutImage} alt='Sean Riedl' className='px-5 pt-5 card-body' />
            </div>
            <div className='bg-zinc-200 max-w-3xl px-20 py-10 grow-0 lg:self-center'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </main>

    </section>
  )
}

export default About
