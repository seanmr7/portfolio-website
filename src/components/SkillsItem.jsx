import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGem,
  FaBootstrap,
  FaGitSquare,
} from 'react-icons/fa'

function SkillsItem({ tag }) {
  switch (tag) {
    case 'FaReact':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaReact className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    case 'FaJsSquare':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaJsSquare className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    case 'FaHtml5':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaHtml5 className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    case 'FaCss3Alt':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaCss3Alt className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    case 'FaGem':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaGem className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    case 'FaBootstrap':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaBootstrap className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    case 'FaGitSquare':
      return (
        <div className='skill-container mx-3 my-auto'>
          <FaGitSquare className='text-5xl mb-3' />
          <p className='text-md'>HTML</p>
        </div>
      )
    default:
      return <div>Inside Switch</div>
  }
}

export default SkillsItem
