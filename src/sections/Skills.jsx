import { useContext, lazy, Suspense } from 'react'
import ThemeContext from '../context/theme/ThemeContext'
// import SkillsItem from '../components/SkillsItem'
const SkillsItem = lazy(() => import('../components/SkillsItem'))

function Skills() {
  const { theme } = useContext(ThemeContext)
  return (
    <section id='skills' className={`alternate-bg-${theme}`}>
      <main className='mx-auto'>
        <div className='container flex flex-col skills-section-div'>
          <h1 className='text-2xl mt-6 mb-1 mx-auto text-center'>Skills</h1>
          <div className='container flex flex-1 justify-self-center self-center justify-around content-center flex-wrap mt-8 gap-y-6 mb-6 md:flex-nowrap md:mt-4'>
            <Suspense fallback={<div>Loading...</div>}>
              <SkillsItem tag={'FaHtml5'} />
              <SkillsItem tag={`FaCss3Alt`} />
              <SkillsItem tag={`FaJsSquare`} />
              <SkillsItem tag={`FaReact`} />
              <SkillsItem tag={`FaGem`} />
              <SkillsItem tag={`FaBootstrap`} />
              <SkillsItem tag={`FaGitSquare`} />
            </Suspense>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Skills
