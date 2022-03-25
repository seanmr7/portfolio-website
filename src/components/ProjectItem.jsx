import { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

function ProjectItem({
  repo: { name, description, imageUrl, html_url, homepage },
}) {
  const { theme } = useContext(ThemeContext)

  // Set the visit link to either the app's url or the Github repo
  let visit = ''
  if (homepage === null || homepage === '') {
    visit = html_url
  } else {
    visit = homepage
  }

  return (
    <div
      className={`card-body mx-auto w-screen mb-14 p-4 md:w-8/12 alternate-bg-${theme} rounded-md shadow-xl`}>
      <img
        src={process.env.PUBLIC_URL + `/images/${imageUrl}`}
        alt='Site demo'
        className='mx-auto mt-4 w-full md:w-11/12'
      />
      <p className='text-center md:text-xl my-2'>{name}</p>
      <p className='md:text-lg text-center mb-2'>
        {description !== null ? description : 'Project description'}
      </p>
      <a
        href={`${visit}`}
        target='_blank'
        rel='noreferrer'
        className='text-center text-md'>
        Visit
      </a>
    </div>
  )
}

export default ProjectItem
