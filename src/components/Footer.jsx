import { FaFileDownload } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Resume from '../assets/data/Resume - Riedl.pdf'

function Footer() {
  return (
    <footer className="mt-8 p-4 footer bg-base-300 text-base-content text-md footer-center flex flex-row">
      <div className='items-center grid-flow-col'>
        <a href={Resume} download className='flex mx-2'>
          <FaFileDownload className='self-center'/>
          <p className='ml-1'>Resume</p>
        </a>
        <a href='https://github.com/seanmr7' target='_blank' rel='noreferrer' className='flex mx-2'>
          <FaGithub className='self-center'/> 
          <p className='ml-1'>Github</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
