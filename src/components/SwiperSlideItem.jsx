import { useContext } from "react"
import ThemeContext from "../context/theme/ThemeContext"

function SwiperSlideItem({repo: {name, description, imageUrl, html_url, homepage}}) {
  const { theme } = useContext(ThemeContext)


  return (
    <div className={`card-body mx-auto w-screen md:w-10/12 alternate-bg-${theme} rounded-md shadow-xl`}>
      <img src={process.env.PUBLIC_URL + `/images/${imageUrl}`} alt='Site demo' className='mx-auto w-full md:w-11/12' />
      <p className='text-center md:text-xl my-2'>{name}</p>
      <p className='md:text-lg text-center mb-2'>{description !== null ? description : 'Project description'}</p>
      <a href={`${homepage === null ? html_url : homepage}`} target='_blank' rel='noreferrer' className='text-center text-md'>Visit</a>
    </div>
  )
}

export default SwiperSlideItem
