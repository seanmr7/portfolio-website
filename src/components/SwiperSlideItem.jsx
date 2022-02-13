import { useContext } from "react"
import ThemeContext from "../context/theme/ThemeContext"

function SwiperSlideItem({repo: {name, description, imageUrl, html_url, homepage}}) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`card-body mx-auto w-3/5 alternate-bg-${theme} rounded-md shadow-xl`}>
      <img src={process.env.PUBLIC_URL + `/images/${imageUrl}`} alt='Site demo' />
      <p className='text-center md:text-xl my-2'>{name}</p>
      <p className='md:text-lg text-center'>{description}</p>
      <a href={homepage !== '' ? homepage : html_url} target='_blank' rel='noreferrer' className='text-center text-md'>Visit Site</a>
    </div>
  )
}

export default SwiperSlideItem
