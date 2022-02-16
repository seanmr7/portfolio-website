import { FaFileDownload } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import loanCalculator from '../assets/images/demos/Loan-calculator.png'

function Footer() {
  return (
    <footer className="mt-8 p-4 footer bg-base-300 text-base-content text-md footer-center flex flex-row">
      <div className='items-center grid-flow-col'>
        <a href={loanCalculator} download className='flex mx-2'>
          <FaFileDownload className='self-center'/>
          <p className='ml-1'>Resume</p>
        </a>
        <a href='https://github.com/seanmr7' className='flex mx-2'>
          <FaGithub className='self-center'/> 
          <p className='ml-1'>Github</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
