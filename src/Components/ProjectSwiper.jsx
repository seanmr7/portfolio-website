import { Swiper, SwiperSlide } from "swiper";
import { EffectCoverflow } from "swiper";
import 'swiper/css'
import 'swiper/css/effect-coverflow'

function ProjectSlider() {
  return (
    <Swiper
      modules={[EffectCoverflow]}
      centeredSlides={true}
      onSlideChange={() => console.log('slide changed')}
      effect={'coverflow'}
      spaceBetween={0}
      coverflowEffect={{
      slideShadows: false,
      stretch: 50
      }}
    >
      <SwiperSlide>Slider 1</SwiperSlide>
      <SwiperSlide>Slider 2</SwiperSlide>
      <SwiperSlide>Slider 3</SwiperSlide>
    </Swiper>
  )
}

export default ProjectSlider
